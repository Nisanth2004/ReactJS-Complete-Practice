import { useState } from "react";
function State()
{
    // arrow function
    const[display,setDisplay]=useState(1234);

    const incrementDisplay= ()=> {
        setDisplay(display+1000);
    }
    return(
     <>
     <h2>{display}</h2>
     <br/>
   
     <button onClick={incrementDisplay}>Increase</button>
     
     </>
    );
}
export default State;