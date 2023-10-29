const {Router} = require('express');
const { filterEarningsHandler, filterEarningsbydateHandler, orderEarningsbydateHandler,  orderEarningsbyamountHandler,filterBillsHandler } = require('../handlers/filtersHandler');
const filtersRouter = Router()

//Filtros earning
filtersRouter.get('/earnings',filterEarningsHandler)
filtersRouter.get('/order-date', orderEarningsbydateHandler)
filtersRouter.get('/', filterEarningsbydateHandler)
filtersRouter.get('/order-amount', orderEarningsbyamountHandler)
//filtersRouter.get('category-')
//filtros bills
filtersRouter.get('/bills/:UserId',filterBillsHandler)
module.exports= {filtersRouter}