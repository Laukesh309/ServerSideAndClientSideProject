

import React, { Component } from 'react'

import Home from "../component/Home"
import Laukesh from "../component/Laukesh"
import Mukesh from "../component/Mukesh"

import {Switch,Route} from "react-router-dom"


const App =()=>{
    return(
        <Switch>
            <Route 
            path="/"
            exact={true}
            render={(props)=>{
                 return <Home/>

            }}/>
            <Route path="/laukesh" 
                   exact = {true}
            render={(props)=>{
                console.log(props)
                return <Laukesh {...props}/>
            }}/>
            <Route path="/mukesh" 
                   exact ={true}
                   render={(props)=>{
                return <Mukesh {...props}/>
            }}/>
        </Switch>

    )
}

export default App