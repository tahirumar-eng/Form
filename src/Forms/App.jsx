import React, { Component } from 'react'
import Navbar from '../Forms/Navbar'
import Login from '../Forms/Login'
import SignUp from '../Forms/SignUp'
import Home from '../Forms/Home'
import './App.css'
import { BrowserRouter ,Switch,Route} from 'react-router-dom'

 class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
             <Navbar/>
             <Switch>
             <Route exact={true} path="/" component={Home}/>
             <Route path="/login" component={Login}/>
             <Route path="/signup" component={SignUp}/>   
            </Switch>  
            </div>
            </BrowserRouter>
        )
    }
}

export default App
