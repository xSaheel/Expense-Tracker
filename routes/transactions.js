const express = require('express');
const router = express.Router();
const {getTransactions, addTransaction, deleteTransaction} = require('../controllers/transactionController');

// GET AND ADD TRANSACTIONS
router.route('/')
    .get(getTransactions)
    .post(addTransaction);

// DELETE TRANSACTIONS
router.route('/:id').delete(deleteTransaction);

module.exports = router;