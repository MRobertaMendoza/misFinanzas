const {Router} = require('express');
const {userRouter} = require('./userRouter');
const {cardRouter} = require('./cardRouter');
const {earningRouter} = require('./earningRouter');
const { categoryEarningRouter } = require('./categoryEarningRouter');
const billsRouters = require('./billsRouter');
const { categoryBills } = require('./categoryBillsRouter');
const { filtersRouter } = require('./filtersRouter');
const { statsRouter } = require('./statsRouter');

const router = Router();

// PRINCIPAL ROUTES 
router.use('/user', userRouter);
router.use('/card', cardRouter);
router.use('/earning', earningRouter);
router.use('/categoryEarning', categoryEarningRouter);
router.use('/bill', billsRouters);
router.use('/categoryBill', categoryBills);
router.use('/filter',filtersRouter)
router.use('/stats',statsRouter)



module.exports = router