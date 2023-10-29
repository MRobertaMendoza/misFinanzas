const { getCardsByUserIdController, postCardController, putCardController, deleteCardController } = require("../controllers/cardControllers")

const postCardHandler = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { name, bank_name, branch} = req.body;
        const card = await postCardController(userId, name, bank_name, branch);
        res.status(200).json({message: 'Tarjeta registrada con éxito', card});
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor', message: error.message });
    }
};

const getCardsByUserIdHandler = async (req,res) => {
    try {
        const userId = req.params.userId;
        const cards =  await getCardsByUserIdController(userId)
        res.status(200).send(cards)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
};

const putCardHandler = async (req, res) => {
    try {
        const cardId = req.params.cardId;
        const { name, bank_name, branch } = req.body;
        const card = await putCardController(cardId, name, bank_name, branch);
        res.status(200).send(card);
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
};

const deleteCardHandler = async (req, res) => {
    try {
        const cardId = req.params.cardId;
        const card = await deleteCardController(cardId);
        res.status(200).send("Tarjeta eliminada con éxito")
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' })
    }
};

module.exports = {getCardsByUserIdHandler, postCardHandler, putCardHandler, deleteCardHandler};