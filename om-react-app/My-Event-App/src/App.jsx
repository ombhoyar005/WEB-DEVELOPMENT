// import React from "react";

// function App(){

//   function hanldeClick(){
//     alert('Button Clicked')
//   }

//   return(
//     <div>
       
//        {/* Event Name Inside The HTML Tag Itself  
//        React Name of The events are - onEventName 
//        Synatx
//        */}

//        <button onClick={hanldeClick}> Click Me </button>

//     </div>
//   )

// }
// export default App


//Example 2 - Live Search using onChange

import { useState } from "react";

function App(){

  const [text,setText] = useState("");

  return(
    <div>
        <label>Search Box</label>
        <input  placeholder="Search .... "  onChange={ (e)=> setText(e.target.value)  }    />

        <h3>You Typed : {text} </h3>

    </div>
  )

}

export default App