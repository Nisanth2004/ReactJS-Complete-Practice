import { useState } from "react";

function FavouriteColor()
{
    //let color='Blue';

   const [color,setColor]= useState('Blue')
    return (
    <>
    <h1>My Favourite Color is {color}</h1>
    <button onClick={() => {setColor('Green')}}>ChangeColor</button>
    </>
    );
}
export default FavouriteColor;