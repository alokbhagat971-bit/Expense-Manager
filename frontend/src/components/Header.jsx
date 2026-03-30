import "../style/Header.css"
import Balance from "./Balance"
import { Link } from "react-router-dom"

function Header(){
  return (
    <div className="container">
      <div className="Heading">
        <h2>💸 Expense Tracker</h2>
        <div className="auth-links">
          <Link to="/login">Login</Link> 
          
          <Link to="/signup">Signup</Link>
        </div>
        <Balance/>
      </div>
    </div>
  )
}

export default Header