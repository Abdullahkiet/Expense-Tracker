import React, { createContext, useReducer, useEffect } from 'react';

//Reducer
import AppReducer from './AppReducer';

// Update session
const updateSession = (transactionHistory) => {

    localStorage.setItem(
        'transactionHistory',
        JSON.stringify(transactionHistory)
    );

}

// Create the initial state
const initialState = (() => {

    let initialState = {
        transactions: []
    }

    // Checking for previous sessions
    const previousSession = localStorage.getItem('transactionHistory');
    if (previousSession) {
        try {
            const previousSessionData = JSON.parse(previousSession);
            initialState = previousSessionData;
        }
        catch {
            updateSession(initialState);
        }
    }
    else {
        updateSession(initialState);
    }

    return initialState;

})();

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            });
        }

        // Saving state to the session
        useEffect(()=>{
            updateSession(state);
        }, [state]);

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}