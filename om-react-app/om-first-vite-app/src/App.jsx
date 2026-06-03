// import React from "react"
// 
// 
// function App(){
// 
// let count = 7
// function Greet(){
//   alert'Hii How are You?'
// }
//   return(
//     <div>
//       <h1>Hello Guys</h1>
//       <h2>Likes❤️ {count}</h2>
//       <button onClick={Greet}> Good Morning</button>
//     </div>
//   )
// }
// export default App

//Example 2 : Variables in React
// import React from "react";


// function App(){

//   let count= 0

//   function increaseCount(){
//     count = count + 1;
//     console.log(count)
//   }

//   return(
//     <div>
//               <h2>The Value of Count is : {count} </h2>
//               <button onClick={increaseCount}>Increase</button>

//     </div>
//   )
// }
// export default App



//Example 2 - using useState hook in React

// Basic Syntax
// const [variableName , setVariableName ] = useState(inital Value )

// import { useState } from "react";   

// function App(){

//   const[likes , setLikes] = useState(10)

//   function increaseLike(){
//        setLikes(likes + 1)

//         console.log(likes)
//   }

//   return(
//     <div>
//       <h2>Likes : {likes}</h2>
//       <button onClick={increaseLike}>💖 Like</button>
//     </div>
//   )
// }

// export default App


//Example 3 : SHow/Hide password

// 
// import { useState } from "react";
// 
// function App(){
// const [show , setShow] = useState(false)
// 
// 
//   return(
//     <div>
//            
//             <input type= {show ? "text" : "password"   }    placeholder="Enter Your Password" />
// 
//             <button onClick={  ()=> setShow(!show)  }>Show/Hide</button>
//     </div>
//   )
// }
// 
// export default App

//Example 4 : Make Follow button Following after clicking on it

import {useState} from "react";

function App(){


const [follow,setFollow] = useState(false)


return(
  <div>
    <h1>Follow Example</h1>
    <button onClick= { ()=> setFollow(!follow)} >{follow? "Following":"Follow"}</button>
  </div>
  );
}

export default App;

// 