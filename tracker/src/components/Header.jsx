import "../style/Header.css"
import Balance from "./Balance"
import "../style/Header.css"
function Header(){
  return (
    <div className="container">
    <div className="Heading">
      <h2>💸 Expense Tracker</h2>
      <Balance />
    </div>
    </div>
  );
}
export default Header