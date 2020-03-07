import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

 class Navbar extends Component {
    render() {
        return (
            <div>
    <nav class="navbar navbar-expand-lg navbar-light " 
    style={{backgroundColor:'#305f7a', boxShadow:"10px 10px 5px "}}
    >
    <i class="fab fa-node-js fa-3x" style={{color:'white'}}></i>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto "  style={{fontSize:'18px'}}>
      
      <li class="nav-item active" >
      <NavLink 
      to="/" 
      className="nav-link" 
      style={{color:'white'}}>
       <button className="btn btn-primary" >
        Home
        </button>
      </NavLink>
      </li>   
      <li class="nav-item active"> 
      <NavLink 
      to="/login" 
      className="nav-link" 
      style={{color:'white'}} >
      <button className="btn btn-primary">Log in
      </button>
      </NavLink>
      </li>
      <li class="nav-item active">
        <NavLink 
        to="/signup" 
        className="nav-link" 
        style={{color:'white'}}>
        <button className="btn btn-primary">
        Sign Up
        </button>
        </NavLink>
      </li>
      </ul>
      </div>
      </nav>
     
      </div>
        )
    }
}

export default Navbar
