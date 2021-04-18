

import React, { Component } from 'react'


const Error =({ staticContext = {} })=>{
    staticContext.status = 404;
    return(
        <div>
             <h1>Oops, nothing here!</h1>;
        </div>
    )
}

export default Error