
import React, { useContext, useState } from 'react';
import {TransactionsContext} from '../transContext';


function Child() {

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) =>{
        event.preventDefault();
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc   
        })

        setDesc("");
        setAmount(0); 
    }

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
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      
      <h3>Your Balance <br/> ${getIncome() + getExpense()} </h3>

      <div className="exp-container">
          <h3>INCOME  <br/> ${getIncome()}</h3>
          <h3>EXPENSE  <br/> ${getExpense()} </h3>
      </div>


      <div>
          <h3>Transaction History</h3>
          <hr/>
          <ul className="transaction-list">
              {transactions.map((transObj, id) => {
                  return(
                    <li key={id}>
                        <span>{transObj.desc}</span>
                         <span>{transObj.amount}</span>
                    </li>
                  )
              })}
              
          </ul>
      </div>


      <div>
          <h3>Add Transaction</h3>
          <hr/>

          <form className="transaction-form" 
          onSubmit={handleAddition}>
              <label>
                  Enter description <br/>
                  <input type="text"
                  value={newDesc} 
                  required 
                  onChange={(ev)=>setDesc(ev.target.value)}/>
              </label> <br/>
              <label>
                  Enter Amount <br/>
                  <input type="number" 
                  value={newAmount}
                  required 
                  onChange={(ev)=>setAmount(ev.target.value)}/>
              </label> <br/>
              <input type="submit" value="Add Transaction" />

          </form>
      </div>

     
    </div>
  );
}

export default Child;


