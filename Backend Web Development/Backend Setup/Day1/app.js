const express = require('express')
const cors = require('cors')

const app = express()

//MiddleWare
app.use(cors())   //Enable The Cors So we can share resource even though having diffrent address
app.use(express.json())


//Eample 1 : Basic
// app.post('/login' , (req,res)=>{

//  const {name , email} =   req.body        //frontend

//  console.log(name)

//  //Simple Validation
//  if(name && email){
//     res.json({ message: `Welcome To my Webiste  ${name}`  })
//  }else{
//     res.status(400).json({message:'Name and EMail are required'})
//  }

// });

app.get('/',(req,res)=>{
    res.json({
        message:'Backend Running'
    })
})


//Login API - Real World
app.post('/login' , (req,res)=>{

const {name,email} = req.body

if(!name || !email){
      return res.status(400).json({
        success:false,
        message:"Name and Email are required"
      })
}

//Remove Extra Space and Make The format standard
const userName = name.trim().toLowerCase();
const userEmail = email.trim().toLowerCase();

//Name Validation
if(userName.length < 3){
      return res.status(400).json({
        success:false,
        message:"Name must be atleast 3 characters"
      })
}

//Email Verifcation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^/s@]+$/;

if(!emailRegex.test(userEmail)){
    return res.status(400).json({
        success:false,
        message:"Invalid Email Format"
      })
}


//Generate Login ID
const loginId  = Math.floor(Math.random() * 100000)


//Success Response

res.status(200).json({
    success:true,
    message:`Welcome ${userName}! Login Successfull`,
    loginTime: new Date().toLocaleString()
});

});

app.listen(3000 , ()=>{
    console.log("Server Running at http://localhost:3000")
})