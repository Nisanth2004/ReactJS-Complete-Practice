import { useState } from "react";
function MyForm()
{

    // const[name,setName]=useState("")
    // const[email,setEmail]=useState("")
    // const[age,setAge]=useState("")
   // console.log('current state',name);

   const[inputs,setInputs]=useState({phone:"+91",email:"@gmail.com",country:"India",about:"Im a student"})

   function handleSubmit(event)
   {
    // prevent browser from default refresh
    event.preventDefault();
    console.log("Form Submitted");
    // console.log('current state',name,age,email);

    console.log('Current state',inputs);
    
   }

   function handleChange(event)
   {
   const name= event.target.name;
   const value=event.target.value;
     setInputs((previousState)=>{ return { ...previousState,[name]:  value}})
   }
    return(
    <form onSubmit={handleSubmit}>
        <label>Enter Your Name: <input type="text"name="name" onChange={handleChange} /></label>
       <br></br>
       <br></br>
       <label>Enter Your age: <input type="text" name="age" onChange={handleChange} /></label>
       <br></br>
       <br></br>
       <label>Enter Your email: <input type="text" name="email"  value={inputs.email}onChange={handleChange} /></label>
       <br></br>
       <br></br>
       <label>Enter Your Phone: <input type="text" name="phone" value={inputs.phone} onChange={handleChange} /></label>
       <br></br>
       <br></br>
       <br></br>

       <label>Enter Your Country: <select name="country" value={inputs.country} onChange={handleChange}>
       <option value="">Select</option>
        <option value="Australia">Australia</option>
        <option value="America">America</option>
        <option value="Germany">Germany</option>
        <option value="England">England</option>
        <option value="India">India</option>
        
        </select></label>
       <br></br>

       <br></br>
       <label>Enter about you: <textarea value={inputs.about} name="about"  onChange={handleChange}></textarea></label>
       <br/>
       <br/>
       <input type="submit" value="Submit-Form"/>

    </form>
    );
}

export default MyForm;