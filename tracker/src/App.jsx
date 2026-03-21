import { Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Header from "./components/Header"
import BalanceProvider from "./context/BalanceContext"
import "./style/App.css"

function App(){

  return(

    <BalanceProvider>

      <Routes>

        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>

    </BalanceProvider>

  )
}

export default App