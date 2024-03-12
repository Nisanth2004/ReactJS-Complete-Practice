
import './App.css';
import Question from './components/Question';
import { useState } from 'react';
import React from 'react';

function App() {

  const [questionIndex,setQuestionIndex]=useState(0);
  const [score,setScore]=useState(0);
  const[results,setResults]=useState(false);
  const present_question=Question[questionIndex];

  const getChoice=(i)=>{
    if(present_question.answer===i)
    {
      setScore(score+1);

    }
    const next_qusetion=questionIndex+1;
    if(next_qusetion<Question.length)
    {
      setQuestionIndex(questionIndex+1);
    }
    else{
      setResults(true)
    }

  };

  const replay=()=>{
    setQuestionIndex(0);
    setScore(0);
    setResults(false);

  }
  return (
    <div className="quiz_box">
      {results?(<><h1>Your score is :{score}</h1><br/><br/>
      <button onClick={replay}>Play again</button></>
      ):(  <div className='quiz_question'>
        {present_question.question}
     
      <div className='quiz_box_options'></div>
     <ul className='quiz_ul'>
      {present_question.options.map((option,i)=>{
          return <li className='quiz_li' onClick={()=>getChoice(i)}>{option}</li>
        })
      }
   

     </ul>
    </div>)}
    
      
    </div>
  );
}

export default App;
