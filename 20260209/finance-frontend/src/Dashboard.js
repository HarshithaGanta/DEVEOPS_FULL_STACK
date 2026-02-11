import {useEffect,useState} from "react"

function Dashboard(){
const[data,setData]=useState(null)
const[loading,setLoading]=useState(true)
const[error,setError]=useState("")

const fetchDashboard=()=>{
setLoading(true)
fetch("http://localhost:5000/api/dashboard")
.then(res=>res.json())
.then(result=>{
setData(result)
setLoading(false)
})
.catch(()=>{
setError("Failed to fetch")
setLoading(false)
})
}

useEffect(()=>{fetchDashboard()},[])

if(loading)return<h2>Loading...</h2>
if(error)return<h2>{error}</h2>

const balance=data.totalIncome-data.totalExpenses

return(
<div>
<h1>Dashboard</h1>
<p>Total Income: ₹{data.totalIncome}</p>
<p>Total Expenses: ₹{data.totalExpenses}</p>
<p>Balance: ₹{balance}</p>
<button onClick={fetchDashboard}>Refresh</button>
</div>
)
}

export default Dashboard
