
const { getCategoryEarnignsController,  postCategoryEarnignsByUserController,postMultiCatEarningsController } = require("../controllers/categoryEarningController")



const postCategoryEarnignsByUserIdHandler = async (req,res) => {
    try {
        const {name}= req.body;
        const categoryEarnigns = await postCategoryEarnignsByUserController(name)
        res.status(200).send(categoryEarnigns)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})
    }
}
const getCategoryEarnignsHandler = async (req,res) => {
    try {
        const categoryEarnigns = await getCategoryEarnignsController()
        res.status(200).send(categoryEarnigns)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
}
const postMultiCatEarningsHandler = async (req,res)=>{
    try {
        console.log('hola');
        const response = await postMultiCatEarningsController()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
}

module.exports = {getCategoryEarnignsHandler,postCategoryEarnignsByUserIdHandler,postMultiCatEarningsHandler}

