import {useState,useContext} from "react"
import {BalanceContext} from "../context/BalanceContext"
import History from "./History"
import "../style/Transaction.css"
function Transaction(){
  const {setBalance,setIncome,setExpense}=useContext(BalanceContext);
  const [type,setType] = useState("");
  const [title,setTitle] = useState("");
  const [amount,setAmount] = useState("");
  const [transaction,setTransaction]=useState([]);
  function handleAdd(){
    if(!title || !amount || !type){
      return ;
    }
    const newTransaction={
      title,
      amount:Number(amount),
      type
    };
    setTransaction([...transaction,newTransaction]);
    if(type==="Income"){
      setIncome((prevIncome) => prevIncome + Number(amount));
      setBalance((prevBalance) => prevBalance + Number(amount));
    }
    else{
      setExpense((prevExpense) => prevExpense + Number(amount));
      setBalance((prevBalance) => prevBalance - Number(amount));
    }
    setTitle("");
    setAmount("");
    setType("");
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <input 
        type="text"
        placeholder="Enter Title"
        id="inputTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
          />
        <input 
        type="text"
        placeholder="Enter Amount"
        id="inputTitle"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
          />
        <form>
          <label>
            <input 
           type="radio"
           value="Income"
           checked={type==="Income"}
           id="incomeRadio"
           onChange={(e) => setType(e.target.value)}
           />
            Income
          </label>
           <label>
            <input 
           type="radio"
           value="Expense"
           id="expenseRadio"
           checked={type==="Expense"}
           onChange={(e) => setType(e.target.value)}
           />
            Expense
           </label>
        </form>
        <button onClick={handleAdd} >Add Transaction</button>
        <History 
        transaction={transaction}
        setTransaction={setTransaction}
        />
    </>
  );
}
export default Transaction