const express=require('express')
const bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

let votes={
    Alice:0,
    Bob:0,
    Charlie:0
}

app.post('/vote',(req,res)=>{
    const candidate=req.body.candidate_name
    if(votes[candidate]!==undefined){
        votes[candidate]++
        res.redirect('/results.html')
    }else{
        res.send('Invalid Candidate')
    }
})

app.get('/votes',(req,res)=>{
    res.json(votes)
})

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})