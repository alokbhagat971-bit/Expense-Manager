import Header from "./components/Header"
import BalanceProvider from "./context/BalanceContext"
import "./App.css"
function App(){
  return (
    <>
    <BalanceProvider>
      <Header />
    </BalanceProvider>
    </>
  );
}
export default App