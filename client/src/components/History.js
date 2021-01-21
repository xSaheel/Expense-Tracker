import React, {useContext, useEffect} from 'react';
import Transaction from './Transaction';
import {GlobalContext} from '../context/GlobalState';

const History = () => {

    const { transactions, getTransaction } = useContext(GlobalContext);

    useEffect(() => {
        getTransaction();
    },[]);

    return(
        <div>
            <h3 className="history">History</h3>
            {transactions.length === 0 ? <h4 className="no-trans">───── No Transactions Yet ─────</h4> : <div className="scrollView">
                <ul className="list">
                    {transactions.map(transaction => (
                        <Transaction key = {transaction.id} transaction = {transaction}/>
                    ))}
                </ul>
            </div>}
        </div>
    );
}

export default History;