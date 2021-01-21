import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

const Income = () => {

    const {transactions} = useContext(GlobalContext);
    var income=0,expense=0;
    const amounts = transactions.map(transaction => {
        if(transaction.sign === false){
            expense += parseInt(transaction.amount);
        }
        else{
            income += parseInt(transaction.amount);
        }
    });

    return(
        <div className="expense-container">
            <div>
                <h4>Income</h4>
                <p className="gain">₹{Number(income.toFixed(2)).toLocaleString('en-in')}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="loss">₹{Number(expense.toFixed(2)).toLocaleString('en-in')}</p>
            </div>
        </div>
    );
}

export default Income;