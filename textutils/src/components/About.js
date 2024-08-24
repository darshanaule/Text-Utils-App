import React from 'react'
// { useState } 



export default function About(props) {
  
   
   
    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'

    // })

      
    // const[btnText,setBtntext]=useState('Dark Mode')


    // const toggleDarkMode=()=>{
    //     if(myStyle.color ==='black'){
    //         setMyStyle({
    //            color:'white',
    //            backgroundColor:'black',
    //            border:'1px solid white'
    //         })
    //         setBtntext('Light Mode')
    //     }
    //     else{
    //         setMyStyle({
                
    //           color:'black',
    //           backgroundColor:'white'
    //          })
    //          setBtntext('Dark Mode')
    //     }
    // }

  return (
    <div  className="conatiner my-3 mx-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>About Us</h2>
    </div>
  )
}
