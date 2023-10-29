const { Router }= require('express');
const {getBillByUserIdHandler, createBillHandler, deleteBillHandler, updateBillHandler } = require('../handlers/billsHandler');
const { getBillsSortedByAmountHandler, getBillsSortedByDateHandler } = require('../handlers/orderBillsHandler');

const billsRouters = Router();

billsRouters.get('/user/:userId/bills', getBillByUserIdHandler)
billsRouters.post('/user/:userId', createBillHandler);
billsRouters.put('/:billId', updateBillHandler);
billsRouters.delete('/:billId', deleteBillHandler );
billsRouters.get('/user/:userId/bills/sorted-by-amount', getBillsSortedByAmountHandler);
billsRouters.get('/user/:userId/bills/sorted-by-date', getBillsSortedByDateHandler);

module.exports= billsRouters;