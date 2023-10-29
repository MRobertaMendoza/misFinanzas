const { getBillsSortedByAmount, getBillsSortedByDate } = require('../controllers/orderBills');

const getBillsSortedByAmountHandler = async (req, res) => {
    try {
      const { order } = req.query; 
      const bills = await getBillsSortedByAmount(order);
      res.status(200).send(bills);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getBillsSortedByDateHandler = async (req, res) => {
    try {
      const { order } = req.query; 
      const bills = await getBillsSortedByDate(order);
      res.status(200).send(bills)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = { getBillsSortedByAmountHandler, getBillsSortedByDateHandler };