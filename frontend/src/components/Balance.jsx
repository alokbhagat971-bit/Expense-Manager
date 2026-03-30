import Transaction from "./Transaction"
import { BalanceContext } from "../context/BalanceContext"
import { useContext } from "react"
import "../style/Balance.css"
import ExpensePieChart from "./ExpensePieChart"

function Balance(){

  const {balance,income,expense} = useContext(BalanceContext)

  return (
    <>
      <div className="balance">
        <h3>Your Balance</h3>
        <h2>₹{balance}</h2>
      </div>

      <div className="money1">
        <h3>Income</h3>
        <h2>₹{income}</h2>
      </div>

      <div className="money2">
        <h3>Expense</h3>
        <h2>₹{expense}</h2>
      </div>

      <ExpensePieChart/>
      <Transaction/>

    </>
  )
}

export default Balance