const { Invoice, InvoiceItem, Transaction, Activity, Balance, User } = require('../models');
const sequelize = require('../database');
const { invoiceTotalFromItems } = require('../utils/deducers');

exports.createInvoice = async (req, res) => {
  const t = await sequelize.transaction(); // Start a transaction

  try {
    const userId = req.user.id;
    const {
      payer_id: payerId,
      items,
      notes,
      invoice_number,
      ship_goods,
    } = req.body;

    const totalAmount = invoiceTotalFromItems(items);

    // Create invoice within the transaction
    const invoice = await Invoice.create({
      user_id: userId,
      payer_id: payerId,
      amount: totalAmount,
      invoice_number,
      notes,
      ship_goods,
      status: 'pending',
      issue_date: new Date(),
    }, { transaction: t });

    // Create activity within the transaction
    await Activity.create({
      user_id: payerId,
      contact_id: userId,
      actionable_id: invoice.id,
      actionable_type: 'Invoice',
      action: 'received',
      meta: {
        notes,
        amount: totalAmount,
        currency: invoice.currency,
      },
    }, { transaction: t });

    // Bulk create invoice items within the transaction
    const invoiceItems = await InvoiceItem.bulkCreate(
      items.map(item => ({
        ...item,
        user_id: userId,
        invoice_id: invoice.id,
      })),
      { transaction: t }
    );

    // Commit the transaction
    await t.commit();

    // Send response
    res.status(201).json({
      message: 'Invoice sent successfully',
      invoice: {
        ...invoice.toJSON(), // Convert instance to plain object
        items: invoiceItems,
        payer: await User.findByPk(payerId),
      },
    });
  } catch (error) {
    // Rollback the transaction if any operation fails
    await t.rollback();
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getInvoice = async (req, res) => {
  const invoiceId = req.params.id; // Retrieve the invoice ID from the request params

  try {
    // Fetch the invoice along with related user, payer, and invoice items
    const invoice = await Invoice.findByPk(invoiceId, {
      include: [
        { model: User, as: 'user', attributes: ['id', 'full_name', 'email', 'address_line_1', 'address_line_2', 'city', 'state'] }, // Invoice creator
        { model: User, as: 'payer', attributes: ['id', 'full_name', 'email'] }, // User being billed
        { model: InvoiceItem, as: 'invoice_items' }, // Invoice items
      ],
    });

    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    // Send the invoice with all related data
    res.status(200).json(invoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.payInvoice = async (req, res) => {
  const { id: invoiceId } = req.params;
  const { user } = req;

  const t = await sequelize.transaction(); // Start a transaction

  try {
    // Step 1: Fetch the invoice and payer
    const invoice = await Invoice.findByPk(invoiceId);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    if (invoice.payer_id !== user.id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    // Step 2: Check payer's balance
    const balance = await Balance.findOne({ where: { user_id: user.id } });
    if (balance.amount < invoice.amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Step 3: Deduct the invoice amount from the payer's balance
    balance.amount -= invoice.amount;
    await balance.save({ transaction: t });

    // TODO: add to sender's balance

    // Step 5: Record the transaction in the Transaction table
    const transaction = await Transaction.create({
      sender_id: user.id,
      recipient_id: invoice.user_id,
      amount: invoice.amount,
      trigger_id: invoice.id,
      trigger_type: 'Invoice',
      comment: 'Invoice paid',
    }, { transaction: t });
  
    // Step 4: Update the invoice status to 'paid'
    invoice.status = 'paid';
    invoice.paid_at = new Date();
    invoice.transaction_id = transaction.id;
    await invoice.save({ transaction: t });

    // Create activity within the transaction
    await Activity.create({
      user_id: invoice.user_id,
      contact_id: user.id,
      actionable_id: invoice.id,
      actionable_type: 'Invoice',
      action: 'paid',
      meta: {
        notes: invoice.notes,
        amount: invoice.amount,
        currency: invoice.currency,
      },
    }, { transaction: t });

    // Commit the transaction
    await t.commit();

    res.status(200).json({
      message: 'Invoice paid successfully',
      invoice,
    });
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
