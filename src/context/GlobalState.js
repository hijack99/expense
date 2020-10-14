import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
const initialState = {
    transactions: [ 
    { id: 1, text: 'Магазин', amount: -30},
    { id: 2, text: 'Зарплата', amount: 500},
    { id: 3, text: 'Телефон', amount: -10},
    { id: 4, text: 'Сайт', amount: 200},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer (AppReducer, initialState);
    function deleteTransaction (id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction (transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>)
    
}