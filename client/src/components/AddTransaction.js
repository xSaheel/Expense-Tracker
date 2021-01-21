import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const [item,setItem] = useState('');
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const addIncome = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text: item,
            amount: +amount,
            sign: true
        }
        addTransaction(newTransaction);
    }

    const addExpense = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text: item,
            amount: +amount,
            sign: false
        }
        addTransaction(newTransaction);
    }
    
    return(
        <div>
           <h3 className="trans">Add a new transaction</h3>
           <form className="form">
                <div className="form-control">
                    <label>Transaction Name</label>
                    <input type="text" value = {item} placeholder="Enter item Name.." onChange={(e) => setItem(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" value={amount} placeholder="Enter item Cost.." onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className="btns">
                    <button className="add-btn" onClick={addIncome}>Add Income</button>
                    <button className="minus-btn" onClick={addExpense}>Add Expense</button>
                </div>
           </form>
        </div>
    );
}

export default AddTransaction;