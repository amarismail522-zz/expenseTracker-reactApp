import React from 'react'
import { useContext, useState } from 'react';
import {TransactionsContext} from '../transContext';


export const AddTransaction = () => {

    let { addTransaction } = useContext(TransactionsContext)
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

    return (
        <div>
            <h3>Add Transaction</h3>
          <hr/>

          <form className="transaction-form" 
          onSubmit={handleAddition}>
              <label>
                  Enter Description <br/>
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
              <input type="submit" value="Add Transaction" className="btn" />

          </form>
        </div>
    )
}
