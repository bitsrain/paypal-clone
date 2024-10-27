const { Invoice, InvoiceItem, Activity, User } = require('../models');
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
