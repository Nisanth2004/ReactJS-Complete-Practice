import React from "react";
import { useParams } from "react-router-dom";
function User()
{
   const{id}= useParams()
return(
   <>
   <h1>User Profile page</h1>
   <p>User ID is : <b>{id}</b></p>
   </>
);
}

export default User;