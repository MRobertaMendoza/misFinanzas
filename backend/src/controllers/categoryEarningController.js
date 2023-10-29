const { earningsCategories } = require("../helpers/categories.js");
const {CategoryEarning} = require("./../db.js");

const postCategoryEarnignsByUserController = async (name) => {
    const categoryEarnigns = await CategoryEarning.create({name})
    return categoryEarnigns
}


const getCategoryEarnignsController = async (id) => {
    console.log(id);

    try {
        const categoryEarnigns = await CategoryEarning.findAll();
    
        if (categoryEarnigns.length == 0) {
            return "No tiene registro"
            }
        return categoryEarnigns
    } catch (error) {
        console.log(error);
    }
    //const categoryEarnigns = await CategoryEarning.findByPk({where:{id}});
    
   
}

const postMultiCatEarningsController = async () => {
    try {
        const categories = await CategoryEarning.bulkCreate(earningsCategories)
        return categories
    } catch (error) {
        console.log(error.message);
    }
    
}


module.exports = {getCategoryEarnignsController,
postCategoryEarnignsByUserController,postMultiCatEarningsController}

