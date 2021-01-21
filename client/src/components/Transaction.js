import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {

    const sign = transaction.sign === true ? '+' : '-';
    const {deleteTransaction} = useContext(GlobalContext);

    return(
        <li className={transaction.sign === true ? "plus" : "minus"}>
            {transaction.text} <span>{sign} ₹{Number(transaction.amount.toFixed(2)).toLocaleString('en-in')}</span><button className="delete-btn" onClick={
                () => deleteTransaction(transaction._id)
            }>x</button>
        </li>
    );
}

export default Transaction;