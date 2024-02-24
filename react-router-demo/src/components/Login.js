import React from "react";
import { useNavigate } from "react-router-dom";
function Login()
{
    const navigate= useNavigate();
    function onSumbit()
    {
        // code for checking user credentials if success login success
        navigate('/dashboard');
    }
return(
    
   <>
   <h1>Login Page</h1>
   <button onClick={onSumbit}>Login</button>
   </>
);
}

export default Login;