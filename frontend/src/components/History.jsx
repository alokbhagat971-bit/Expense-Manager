import propTypes from "prop-types"
import {useContext} from "react"
import {BalanceContext} from "../context/BalanceContext"
import bin from "../assets/bin.png"
import "../style/History.css"

function History({transaction,setTransaction}){

  const {setBalance,setIncome,setExpense} = useContext(BalanceContext)

  const token = localStorage.getItem("token")

  async function deleteTransaction(id,index){

    const item = transaction[index]

    try{

      await fetch(`http://localhost:3000/api/expenses/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      if(item.type==="Income"){
        setIncome(prev=>prev-item.amount)
        setBalance(prev=>prev-item.amount)
      }else{
        setExpense(prev=>prev-item.amount)
        setBalance(prev=>prev+item.amount)
      }

      setTransaction(transaction.filter(t=>t._id !== id))

    }catch(err){
      console.log(err)
    }

  }

  return (
    <>
      <h3>History</h3>

      <ul>
        {transaction.map((item,index)=>(

          <li key={item._id}>

            <span className="history-left">
              {item.title}
            </span>

            <span className={item.type==="Income" ? "income" : "expense"}>
              {item.type==="Income" ? "+₹" : "-₹"}
              {item.amount}
            </span>

            <img
              src={bin}
              alt="delete"
              onClick={()=>deleteTransaction(item._id,index)}
            />

          </li>

        ))}
      </ul>
    </>
  )
}

History.propTypes={
  transaction:propTypes.array.isRequired,
  setTransaction:propTypes.func.isRequired
}

export default History