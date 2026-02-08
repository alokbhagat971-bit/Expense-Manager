import propTypes from 'prop-types';
import {useContext} from 'react';
import { BalanceContext } from '../context/BalanceContext';
import bin from '../assets/bin.png';
import "../style/History.css"

function History({transaction,setTransaction}) {
  const {setBalance,setIncome,setExpense}=useContext(BalanceContext);
  function deleteTransaction(indexToDelete){
    if(transaction[indexToDelete].type==="Income"){
      setIncome((prevIncome) => prevIncome-transaction[indexToDelete].amount);
      setBalance((prevBalance) => prevBalance-transaction[indexToDelete].amount);
    }
    else{
      setExpense((prevExpense) => prevExpense-transaction[indexToDelete].amount);
      setBalance((prevBalance) => prevBalance+transaction[indexToDelete].amount);
    }
    setTransaction(transaction.filter((_,index) => index!== indexToDelete));

  }
  return (
    <>
      <h3>History</h3>
      <ul>
        {transaction.map((item,index) => (
          <li key={index}>
        <span className="history-left">{item.title}</span>

        <span className={item.type === "Income" ? "income" : "expense"}>
          {item.type === "Income" ? "+₹" : "-₹"}
          {item.amount}
        </span>

        <img
          src={bin}
          alt="delete"
          onClick={() => deleteTransaction(index)}
        />
       </li>

        ))}
      </ul>
    </>
  );
}
History.propTypes={
  transaction:propTypes.array.isRequired,
  setTransaction:propTypes.func.isRequired,
}
export default History