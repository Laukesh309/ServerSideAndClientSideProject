
import React, { Component } from 'react'


const Home =()=>{
    return (
       <div>
           <h1>this is Home Screen</h1>
           <button onClick={()=>{
               console.log("\n\n\n this is client side on click")
           }}>Press Me</button>
       </div>
    )
}

export default Home