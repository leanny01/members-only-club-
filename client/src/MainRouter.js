import React  from 'react'
import {Route,Switch}  from 'react-router-dom'
import Messages from './components/messages'
import Home from './components/home'

const MainRouter = ()=>{
    return (
        <div>
            <Switch>
                <Route exact path= '/' component={Home}></Route>
            </Switch>
        </div>
    )
}
