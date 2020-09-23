import React, { useContext } from 'react'

import {TransactionsContext} from '../transContext';


export const AccountSummary = () => {
    let { transactions } = useContext(TransactionsContext)


    const getIncome = () =>{
        let income = 0;
        for (var i=0; i<transactions.length; i++) {
            if(transactions[i].amount > 0)
                income += transactions[i].amount;
        }
        return income
    }

    const getExpense = () =>{
        let expense = 0;
        for (var i=0; i<transactions.length; i++) {
            if(transactions[i].amount < 0)
                expense += transactions[i].amount;
        }
        return expense
    }


    return (
        <div className="exp-container">
            <h3>INCOME  <br/> 
            <span className="income">${getIncome()}</span>
            </h3>
            <h3>EXPENSE  <br/> 
            <span className="expense">${getExpense()}</span>
             </h3>
        </div>
    )
}
