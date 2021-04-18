

import React, { Component } from 'react'


const Laukesh =({location,history})=>{
  console.log("\n\n\n this is location",history)
    return (
        <div>
            <h1>this is laukesh</h1>
            <button onClick={()=>{
               history.push("/mukesh")
            }}>Go To Mukesh Route</button>
        </div>
    )
}

export default Laukesh