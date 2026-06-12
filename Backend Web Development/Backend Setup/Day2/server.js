const express =     require('express')


const app  =  express()


//MiddleWare - Security Check
app.use(express.json()) 

//API - Routes - URL

//1. Fetch Data of Restraunt
//get : Get The Data od Restraunt from server- Easyily Able To SHow on Frontend

app.get('/restaunts' , (req,res)=>{

    res.send('Fetch The Restraunt Data')

})


//2 Place an Order
// post: Send The Data To the server

app.post('/order' , (req,res)=>{

    res.send(`Order Placed Succeffully Order Details   ${   JSON.stringify(req.body)}`)
})

app.listen(3000, ()=>{
    console.log("Server Running on http://localhost:3000")
})