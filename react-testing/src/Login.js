import { useState } from "react"

export default function Login()
{

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");

    function siginInHandler()
    {
        setMessage("Loading...")
        if(email=== 'nisa@gmail.com'&&password==='1234')
        {
           
            setTimeout(()=>{
                setMessage('SuccessFully logged in');
            },5000);
                  
        }
        else{
            setTimeout(()=>{
                setMessage('invalid credentials');
            },5000);
            
        }
    }


    return <div>
        <h1>Login</h1>

        <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <input type="password" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

        <button onClick={siginInHandler}>Signin</button>
        {message && <p>{message}</p>}
    </div>
}