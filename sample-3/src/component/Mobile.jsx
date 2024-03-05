import React from "react";
export function Mobile({brandName="ABCD",brandPrice})
{
    
    return(
    <>
    <div class="card"  style={{ width: '18rem' }}>
  <img src="logo192.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{brandName}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p>{brandPrice}</p>
    <a href="https://chat.openai.com" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    
    </>
    );
}