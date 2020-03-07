import React, { Component } from 'react'

 class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign:'center',color:'white'}}>Wellcome to home page</h1>
                <p  style={{textAlign:'center',color:'white' ,fontSize:'20px'}}>Please Log in if you have an account</p>
                <p  style={{textAlign:'center',color:'white' ,fontSize:'20px'}}>Please Sign in if you dont have an account</p>
                
            </div>
        )
    }
}

export default Home
