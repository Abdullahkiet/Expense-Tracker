import React, { useState, useContext, useEffect } from 'react';

// Import the Global State
import { GlobalContext } from '../Context/GlobalState';


export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }

    useEffect(()=>{

        const addTransactionElement = document.getElementById('addTransaction');
        
        if (description.trim() === '' || transactionAmount.trim() === ''){
            addTransactionElement.classList.add('disabled');
        }
        else {
            addTransactionElement.classList.remove('disabled');
        }

    }, [description, transactionAmount]);

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Detail of Transaction" 
                            required="required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionamount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder="Dollar Value of Transaction"
                            required="required"
                    />
                </div>
                <button id="addTransaction" className="btn disabled">Add Transaction</button>
            </form>
        </div>
    )
}