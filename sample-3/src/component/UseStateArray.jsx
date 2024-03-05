import { useState } from "react";
import React from "react";

function UseStateArray()
{
    const[data,setData]=useState([]);

    const items=["Dhoni","Kholi","Jadeja","Rohit Sharma","Shami"];

    const addPlayers=()=>{
        setData(items);
    }


    const addOnePlayers=()=>{
    const bowler=["Bumrah"];
    setData([...data,bowler])
    }




    return(
    <>
    <h2>Arrays in useState</h2>
    <br/>
    <button onClick={addPlayers}>AddPlayer</button>
    <br/>
   {data.length&& data.map((items)=>{
    return <li>{items}</li>
   })}
   

   <br/>
   <button onClick={addOnePlayers}>Add One Player</button>

    
    
    
    </>
    );

}
export default UseStateArray;