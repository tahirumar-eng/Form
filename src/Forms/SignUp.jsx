import React, { Component } from 'react'
import Input from '../Forms/Input'
import joi from 'joi-browser';
import './SignUp.css';


 class Signin extends Component {
     state={
         account:{username:'',email:'',password:'',confirmpassword:''},
         error:{}
     }
     schema={
         username:joi.string().required().label('username'),
         email:joi.string().email({ minDomainAtoms: 2 }).label('email'),
         password:joi.string().alphanum().min(4).max(12).label('password'),
         confirmpassword:joi.string().required().label('confirmpassword')

     }
     validateproperty=({name,value})=>{
        const obj={[name]:value}
        const schema={[name]:this.schema[name]}
        const {error}=joi.validate(obj,schema) 
       return error ?error.details[0].message:null;
    }
     validate=()=>{
        const{error}=joi.validate(this.state.account,this.schema,{abortEarly:false});
        if(!error)return null;
        for(let item of error.details) error[item.path[0]]=item.message;
        return error    
     }
     handleSubmit=(e)=>{
         e.preventDefault();
         console.log('submitted');
         const error=this.validate();
         this.setState({error:error ||{}})
         if(error)return
     }

     handleChange=({currentTarget:input})=>{
          const error={...this.state.error}
          const errorMessage=this.validateproperty(input);
          if(errorMessage)error[input.name]=errorMessage;
          else delete error[input.name];
         const account={...this.state.account}
         account[input.name]=input.value;
         this.setState({account ,error})
         }
    render() {
        const{account}=this.state
        return (
 <div className="container" >
 <div className="row">
 <div className="col">
<h1>Wellcome to Sign Up Page</h1>
</div>
<div className="col">
<h1>Sign Up</h1>
<form onSubmit={this.handleSubmit}> 
    
  <Input 
   type="text"
   name="username" 
   label="User Name"
   value={account.username}
   onChange={this.handleChange}
   error={this.state.error.username}
   />
  <Input 
  type="email" 
  name="email"  
  label="Email"
  value={account.email}
  onChange={this.handleChange}
  error={this.state.error.email}
  />
  <Input 
  type="password" 
  name="password"  
  label="Password"
  value={account.password}
  onChange={this.handleChange}
  error={this.state.error.password}/>
  <Input 
  type="password"
  name="confirmpassword" 
  label="Confirm Password"
  value={account.confirmpassword}
  onChange={this.handleChange}
  error={this.state.error.confirmpassword}/>
  
  <button 
  disabled={this.validate()}
  className="btn btn-primary">Sign Up</button>
  </form>
 </div>

</div>
                
</div>
        )
    }
}

export default Signin
