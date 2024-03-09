import React from 'react'
import './Plant.scss'

function Plant() {

    const plantStyles={
        color: 'red'
       

    }
  return (
    <div>
    <div className='plant'>Plant</div>
    <div style={plantStyles}>Plant 2 in this page</div> 
    <div style={{color: 'blue'}}>Plant 2 in this page</div>
    
</div>

  )
}

export default Plant
