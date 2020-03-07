import React, { Component } from 'react'
import joi from 'joi-browser';
import Input from '../Forms/Input'
import './Login.css'

class Login extends Component {
    state={
        account:{email:'',password:''},
        error:{}                             
    }
    schema={
        email:joi.string().email({ minDomainAtoms: 2 }).required().label('email'),
        password:joi.string().required().label('password'),
    }
    validate=()=>{
        const {error}=joi.validate(this.state.account,this.schema ,{abortEarly:false})
        console.log(error)
        if(!error) return null;
        for(let item of error.details) error[item.path[0]]=item.message;
        return error

    }
    handleSubmit=e=>{
        e.preventDefault();
       const error= this.validate();
       console.log(error)
       this.setState({error:error || {}})
       if(error) return
    
        console.log('submitted')
    } 
    validateProperty=({name,value})=>{
      const obj={[name]:value};
      const schema={[name]:this.schema[name]};
      const{error}=joi.validate(obj,schema)
     return error ?error.details[0].message:null
    }
    handleChange=({currentTarget:input})=>{
        const error={...this.state.error}
        const errorMessage=this.validateProperty(input);
        if(errorMessage) error[input.name]=errorMessage;
        else delete error[input.name];
        const account={...this.state.account};
        account[input.name]=input.value;
        this.setState({account,error})
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h2 >Wellcome to login page</h2>
                   </div>                    
                   <div className="col">
                    <h1>Log in </h1>
  <form onSubmit={this.handleSubmit}>
   <Input 
   type="email" 
   onChange={this.handleChange}
   value={this.state.account.email}
   name="email" 
   label="Email"
   error={this.state.error.email} />
   <Input 
   type="password"
   onChange={this.handleChange}
   value={this.state.account.password}
   name="password" 
   label="Password"
   error={this.state.error.password}/>
   <button type="submit" 
  className="btn btn-primary" 
  disabled={this.validate()}
 >
  Submit
  </button>
</form>

    </div>
    </div>
    </div>
        )
    }
}

export default Login
