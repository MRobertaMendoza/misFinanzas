const {Bill, CategoryBill, Card, User } = require('../db');
const Sequelize = require('sequelize');


const billUserGet = async (userId) => {
    try {
        const expenses = await Bill.findAll({
            where: { userId: userId },
            include: [
              { model: CategoryBill}
            ],
          });
    return expenses; 
    } catch (error) {
        throw error
    }
};


const createBill = async (userId, amount, date, name, payment_method, categoryId, cardId, frequency) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Usuario no encontrado.');
    }
    // Crea una instancia de Bill sin asociar con CategoryBill ni User.
    const bill = await Bill.create({
      amount,
      date,
      name,
      payment_method,
      frequency,
    });

    // Si paymentMethod es true, verifica y asocia con Card.
    if (payment_method) {
      if (!cardId) {
        throw new Error('Se requiere una tarjeta para el pago con tarjeta.');
      }
      const card = await Card.findByPk(cardId);
      if (!card) {
        throw new Error('Tarjeta de crédito no válida.');
      }
      await bill.setCard(card);
    }

    // Asocia la factura con la categoría (CategoryBill).
    const category = await CategoryBill.findByPk(categoryId);
    if (!category) {
      throw new Error('Categoría de gasto no válida.');
    }
    await bill.setCategoryBill(category);

    // Asocia la factura con el usuario (User) usando userId.
    await bill.setUser(user);

    return bill;
  } catch (error) {
    throw error;
  }
};

module.exports = {billUserGet, createBill };