const { Card, User } = require('../db');

const postCardController = async (userId, name, bank_name, branch) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
          throw new Error('Usuario no encontrado.');
        }
        const card = await Card.create({
            name, 
            bank_name,
            branch
        })
        await card.setUser(user);
        return card;
    } catch (error) {
        throw error;
    }
};

const getCardsByUserIdController = async (userId) => {
    try {
        const cards = await Card.findAll({
            where: { userId: userId }
        })
        return cards;
    } catch (error) {
        throw error;
    }
}

const putCardController = async (cardId, name, bank_name, branch) => {
    try {
        const updateCArd = await Card.findByPk(cardId);
        if(!updateCArd){
            throw new Error('La tarjeta no se encontró.')   
        }
        if(name){
            updateCArd.name = name;
        }
        if(bank_name){
            updateCArd.bank_name = bank_name;
        }  
        if(branch){
            updateCArd.branch = branch;
        }
        await updateCArd.save()
        return updateCArd;
    } catch (error) {
        throw error;
    }
};

const deleteCardController = async (cardId) => {
    try {
    const card = await Card.findByPk(cardId);
    if (!card) {
        throw new Error('La tarjeta no se encontró.') ;
      }
      await card.destroy();
    } catch (error) {
        throw error;
    }
};


module.exports = {getCardsByUserIdController, postCardController, putCardController, deleteCardController };