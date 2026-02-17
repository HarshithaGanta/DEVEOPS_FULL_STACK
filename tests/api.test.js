const request=require("supertest")
const app=require("../app")

describe("Integration Tests",()=>{

test("Create and Fetch Expense",async()=>{
await request(app)
.post("/api/expenses")
.send({amount:500})

const res=await request(app)
.get("/api/expenses")

expect(res.statusCode).toBe(200)
expect(res.body.length).toBeGreaterThan(0)
})

test("Create and Fetch Income",async()=>{
await request(app)
.post("/api/income")
.send({amount:1000})

const res=await request(app)
.get("/api/income")

expect(res.statusCode).toBe(200)
expect(res.body.length).toBeGreaterThan(0)
})

test("Dashboard Summary",async()=>{
const res=await request(app)
.get("/api/dashboard")

expect(res.statusCode).toBe(200)
expect(res.body).toHaveProperty("totalIncome")
expect(res.body).toHaveProperty("totalExpenses")
expect(res.body).toHaveProperty("balance")
})

})
