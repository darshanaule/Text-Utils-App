import React from 'react'

function Alert(props) {


  const capitalize=(word)=>{
   const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }

  return (
 
       props.alert && <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
          {capitalize(props.alert.ty)} : {props.alert.msg}
        </div>
      
   
  )
}
export default Alert