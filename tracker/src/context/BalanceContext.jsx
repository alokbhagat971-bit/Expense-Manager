import { createContext, useState } from "react"
import propTypes from "prop-types";

export const BalanceContext = createContext();

function BalanceProvider({ children }){
  const [balance,setBalance] = useState(0);
  const [income,setIncome] = useState(0);
  const [expense,setExpense] = useState(0);
  return (
    <BalanceContext.Provider value={{balance,setBalance,income,setIncome,expense,setExpense}}>
      {children}
    </BalanceContext.Provider>
  );
}
BalanceProvider.propTypes={
  children:propTypes.node.isRequired,
}
export default BalanceProvider