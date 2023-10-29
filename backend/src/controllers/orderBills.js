const { Bill } = require('../db');

const getBillsSortedByAmount = async (order) => {
    try {
      const direction = order && order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
      const bills = await Bill.findAll({
        order: [['amount', direction]], // Ordenar en la dirección especificada
      });
      return bills;
    } catch (error) {
      throw new Error('Error ordenando los gastos: ' + error);
    }
  };

  const getBillsSortedByDate = async (order) => {
    try {
      const direction = order && order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
      const bills = await Bill.findAll({
        order: [['date', direction]], // Ordenar en la dirección especificada
      });
      return bills;
    } catch (error) {
      throw new Error('Error ordenando los gastos: ' + error);
    }
  };
  module.exports = { getBillsSortedByAmount, getBillsSortedByDate };