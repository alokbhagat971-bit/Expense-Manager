import { PieChart,Pie,Cell,Tooltip,Legend } from "recharts"
import { useContext } from "react"
import { BalanceContext } from "../context/BalanceContext"

const COLORS = ["#1e8e5a","#d93025"]

function ExpensePieChart(){

  const {income,expense} = useContext(BalanceContext)

  const data=[
    {name:"Income",value:income},
    {name:"Expense",value:expense}
  ]

  return(
    <PieChart width={250} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="58%"
        cy="50%"
        outerRadius={50}
        label
      >
        {data.map((entry,index)=>(
          <Cell key={index} fill={COLORS[index % COLORS.length]}/>
        ))}
      </Pie>

      <Tooltip/>
      <Legend/>
    </PieChart>
  )
}

export default ExpensePieChart