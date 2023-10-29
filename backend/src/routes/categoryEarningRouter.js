const {Router} = require('express');
const {getCategoryEarnignsHandler, postCategoryEarnignsByUserIdHandler,postMultiCatEarningsHandler} = require('../handlers/categoryEarnignHandlers');

const categoryEarningRouter = Router();

categoryEarningRouter.get('/', getCategoryEarnignsHandler);
categoryEarningRouter.post('/',postCategoryEarnignsByUserIdHandler);
categoryEarningRouter.post('/multi',postMultiCatEarningsHandler);

module.exports ={categoryEarningRouter};