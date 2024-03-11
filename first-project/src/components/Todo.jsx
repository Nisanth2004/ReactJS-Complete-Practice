
import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import ToDoitem from './ToDoitem';
let count=0;
const Todo = () => {
  
    // usestate variable
    const[todos,setTodos]=useState([]);
    const inputRef=useRef(null);

    const add=()=>{
        // this obj will add in todos variable
       setTodos([...todos,{no:count++,text:inputRef.current.value,display:" "}]);
       inputRef.current.value="";
       localStorage.setItem("todos_count",count);
       
    }
    useEffect(()=>{
        // when page is reloaded we get data from localstorage in usestate variable(setTodos)
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("todos_count");
        
    },[])
    useEffect(()=>{
        
            
            setTimeout(()=>{
                console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos));
            },100);
                
            
    },[todos]) // when todos is updated this function will take action


    
    return (
        <div className='todo'>
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input ref={inputRef} type="text" placeholder='Add your task'  className='todo-input'/>
                <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
            </div>
            <div className="todo-list">
              {todos.map((item,index)=>{
                return <ToDoitem  key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
              })}
            </div>
          
        </div>
      )
  
}

export default Todo
