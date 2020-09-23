import React,{createContext, useReducer} from 'react';
import TransactionReducer from './transReducer';


const initialTransactions = []

export const TransactionsContext = createContext(initialTransactions);

// export default TransactionsContext;



export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transObj) {
        dispatch({
            type: "Add_Trans",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }

    function delTransaction(id) {
        dispatch ({
            type: 'Del_Trans',
            payload: id
        });
    }

    return (
        <TransactionsContext.Provider value={{
            transactions : state, 
            addTransaction,
            delTransaction

        }}>
            {children}

        </TransactionsContext.Provider>
    )
}

