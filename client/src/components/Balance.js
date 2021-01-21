import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
    
    const {transactions} = useContext(GlobalContext);
    var total=0;
    const amounts = transactions.map(transaction => {
        if(transaction.sign === false){
            total -= parseFloat(transaction.amount);
        }
        else{
            total += parseFloat(transaction.amount);
        }
    });

    return(
        <div className="balance">
            <h3 className="bal-header">Balance</h3>
            <h1 className="amount">₹{Number(total.toFixed(2)).toLocaleString('en-in')}</h1>
        </div>
    );
}

export default Balance;