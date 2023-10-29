const {Router} = require('express');
const { sumEarningsByCategoryHandler,sumBillsByCategoryHandler,sumBillsMonthHandler  } = require('../handlers/statsHandlers');

const statsRouter = Router();

statsRouter.use('/earningscategory/:userId',sumEarningsByCategoryHandler);
statsRouter.use('/billscategory/:userId',sumBillsByCategoryHandler);
statsRouter.use('/billsmonth/:userId',sumBillsMonthHandler);



module.exports ={statsRouter}