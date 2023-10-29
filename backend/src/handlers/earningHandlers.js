const { 
    getEarningByUserIdController,
    postEarningByUserIdController, 
    putEarningByUserIdController,
    deleteEarningByUserIdController } = require("../controllers/earnignControllers")

const getEarnigsByUserIdHandler = async (req,res) => {
    try {
        const {UserId}=req.params
        const earnings = await getEarningByUserIdController(UserId)
        res.status(200).send(earnings)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}

const postEarnigsByUserIdHandler = async (req,res) => {
    try {     
        const {UserId}=req.params   
        const {amount, date, name, CategoryEarningId}= req.body;
        const earnings = await postEarningByUserIdController(amount, date, name, CategoryEarningId, UserId)
        res.status(200).json(earnings)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})
    }
}

const putEarnigsByUserIdHandler= async (req,res) => {
    try {        
        const {id}= req.params;
        const {amount, date, name, CategoryEarningId}= req.body;
        const earnings = await putEarningByUserIdController(id, amount, date, name, CategoryEarningId)
        res.status(200).json(earnings)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})
    }
}


const deleteEarnigsByUserIdHandler = async (req,res) => {
    try {        
        const {id}= req.params;
        const earnings = await deleteEarningByUserIdController(id)
        res.status(200).json(earnings)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})
    }
}


module.exports = {
    getEarnigsByUserIdHandler,
    postEarnigsByUserIdHandler, 
    putEarnigsByUserIdHandler,
    deleteEarnigsByUserIdHandler} 