const { Router } = require('express');
const { catBillPostHandler, catGetHandler ,postMultiCatBillHandler} = require('../handlers/CategoryBillHandler');

const categoryBills = Router();

categoryBills.post('/', catBillPostHandler);
categoryBills.get('/', catGetHandler);
categoryBills.post('/multi',postMultiCatBillHandler)

module.exports ={ categoryBills };