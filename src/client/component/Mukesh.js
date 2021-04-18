import React, { Component } from 'react'


const Mukesh =({history})=>{
    


    return(
        <div>
            <h1>This is Mukesh</h1>
            <button onClick={()=>{
              history.push("/laukesh")
            }}>Go To Laukesh</button>
        </div>
    )
}

export default Mukesh