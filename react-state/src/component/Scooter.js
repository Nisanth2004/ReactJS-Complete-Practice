import { useState } from "react";

function Scooter()
{
    // const [color,setColor]=useState('Blue');
    // const [brand,setBrand]=useState('Honda');
    // const [model,setModel]=useState('Activa 6G');
    // const [year,setYear]=useState('2018');

    // state with hook
    const[scooter,setScooter]=useState(
        {
            color: "Red",
        brand: "Honda",
        model: "Activa 6G",
        year: "2018"

    }

    );

    function updateColor()
    {
        setScooter(previousState=>{
            // spread operator
            // take copy of the previous state
          return {...previousState,color: "Blue"}
        })
    }

    //console.log('Current State',scooter);
    
    return(
       <>
       <h1>My Scooter</h1>
       <p>Color: {scooter.color}</p>
       <p>Brand: {scooter.brand}</p>
       <p>Model : {scooter.model}</p>
       <p>Year: {scooter.year}</p>

       <button onClick={updateColor}>Change color</button>
       </>
    );
}

export default Scooter;