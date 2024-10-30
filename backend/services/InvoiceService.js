const { Invoice } = require('../models');

class InvoiceService {
  static async generateInvoiceNumber(userId) {
    const count = await Invoice.count({ where: { user_id: userId } });
    const invoiceNumber = (count + 1).toString().padStart(6, '0');
    return invoiceNumber;
  }
}

module.exports = InvoiceService;
