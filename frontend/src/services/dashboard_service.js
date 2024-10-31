import axios from 'axios';

const DashboardService = {
  async getBalance() {
    try {
      const response = await axios.get('/profile/balance');
      return response.data.amount;
    } catch (error) {
      console.error('Error fetching user balance:', error);
      throw error;
    }
  }
};

export default DashboardService;
