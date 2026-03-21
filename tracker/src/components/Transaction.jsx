import {useState,useContext,useEffect} from "react"
import {BalanceContext} from "../context/BalanceContext"
import History from "./History"
import "../style/Transaction.css"

function Transaction(){

  const {setBalance,setIncome,setExpense} = useContext(BalanceContext)

  const [type,setType] = useState("")
  const [title,setTitle] = useState("")
  const [amount,setAmount] = useState("")
  const [transaction,setTransaction] = useState([])

  const token = localStorage.getItem("token")

  useEffect(()=>{

    if(!token) return


    loadTransactions()

  },[token])

  async function loadTransactions(){

      try{

        const res = await fetch("http://localhost:3000/api/expenses",{
          method:"GET",
          headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
          }
        })

        const data = await res.json()

          if(!Array.isArray(data)){
            setTransaction([])
            return
          }

          setTransaction(data)

          let incomeTotal = 0
          let expenseTotal = 0

          data.forEach(item=>{
            if(item.type === "Income"){
              incomeTotal += item.amount
            }else{
              expenseTotal += item.amount
            }
          })

        setIncome(incomeTotal)
        setExpense(expenseTotal)
        setBalance(incomeTotal - expenseTotal)

      }catch(err){
        console.log(err)
      }

    }

  async function handleAdd(e){
  e.preventDefault()

  if(!title || !amount || !type){
    alert("Fill all fields")
    return
  }

  const newTransaction = {
    title,
    amount:Number(amount),
    type
  }

  try{

    const response = await fetch("http://localhost:3000/api/expenses",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      },
      body:JSON.stringify(newTransaction)
    })

    if(!response.ok){
      console.log("Failed to add transaction")
      return
    }

    await loadTransactions()   

  }catch(error){
    console.log(error)
  }

  setTitle("")
  setAmount("")
  setType("")
}

 return (
  <div className="transaction-container">

    <h3>Add New Transaction</h3>

    <input
      type="text"
      placeholder="Enter Title"
      className="transaction-input"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
    />

    <input
      type="text"
      placeholder="Enter Amount"
      className="transaction-input"
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
    />

    <div className="transaction-type">
  <input
    type="radio"
    id="income"
    value="Income"
    checked={type === "Income"}
    onChange={(e) => setType(e.target.value)}
  />
  <label htmlFor="income">Income</label>

  <input
    type="radio"
    id="expense"
    value="Expense"
    checked={type === "Expense"}
    onChange={(e) => setType(e.target.value)}
  />
  <label htmlFor="expense">Expense</label>
</div>

    <button className="transaction-btn" type="button" onClick={handleAdd}>
      Add Transaction
    </button>

    <History
      transaction={transaction}
      setTransaction={setTransaction}
    />

  </div>
)
}

export default Transaction