import axios from 'axios';

const InvoiceService = {
  async getInvoiceNumberSuggestion() {
    try {
      const response = await axios.get('/invoices/generate_number');
      return response.data.invoice_number;
    } catch (error) {
      console.error('Error fetching invoice number suggestion:', error);
      // throw error;
      return "000001";
    }
  }
};

export default InvoiceService;
