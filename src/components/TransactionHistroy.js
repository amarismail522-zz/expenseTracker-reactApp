import React, { useContext } from 'react'
import { TransactionsContext } from '../transContext'

export const TransactionHistroy = () => {
    const {transactions} = useContext(TransactionsContext)
    const { delTransaction } = useContext(TransactionsContext)


    return (
        <div>
          <h3>Transaction History</h3>
          <hr/>
          <ul className="transaction-list">
              {transactions.map((transObj, id) => {
                  return(
                    <li key={id}>
                        <span>{transObj.desc}</span>
                         <span>{transObj.amount}</span>
                         <button className="del-btn" onClick={() => delTransaction(transactions.id)}>X</button>
                    </li>
                  )
              })}
              
          </ul>
      </div>
    )
}
