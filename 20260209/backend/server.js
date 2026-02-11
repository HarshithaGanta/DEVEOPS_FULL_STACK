const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())

app.get("/api/dashboard",(req,res)=>{
res.json({
totalIncome:50000,
totalExpenses:20000
})
})

app.listen(5000,()=>console.log("Backend running on 5000"))
