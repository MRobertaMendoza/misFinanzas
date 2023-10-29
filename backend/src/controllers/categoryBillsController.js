const { CategoryBill } = require('../db');
const {billCategories} = require('../helpers/categories.js');
categoryBillPostController = async(name) => {
try {
    const category = await CategoryBill.create({
        name
    });
    return category;
} catch (error) {
    console.log(error.message)
}
};

catGetController = async () => {
try {
    const cat = await CategoryBill.findAll({
        atributes: {
           exclude:["id"] 
        }
    })
    return cat
} catch (error) {
    
console.log(error.message)
}
};
postMultiCatBillController = async () =>{
    try {
        const categories = await CategoryBill.bulkCreate(billCategories);
        return categories 
    } catch (error) {
        console.log(error.message)
    }
};

module.exports = { categoryBillPostController, catGetController,postMultiCatBillController };
