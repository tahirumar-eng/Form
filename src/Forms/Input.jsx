import React from "react"
const Input=({name,label,value,onChange,error,type})=>{
    return(
        <div class="form-group">
    <label for={name}>{label}</label>
      <input 
      type={type}
      className="form-control" 
      id={name} 
      name={name}
      value={value}
      onChange={onChange} 
      />
     {error && <div className="alert alert-primary" style={{width:'60%'}}>{error}</div>}
  
    </div>
    )
}
export default Input;