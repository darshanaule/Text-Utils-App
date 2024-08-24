import React,{useState} from 'react'


//import { TranslatorProvider, useTranslate } from "react-translate"

export default function TextForm(props) {
  // const [translations,setTranslation]=useState({locale: "en"
  // })
  
  //     const toggleTranslation=({text})=>{
  //         if(translations.locale==='en'){
  //            setTranslation({
  //             locale:'de'
  //            })
  //         }
  //         else{
  //             setTranslation({
  //                 locale:'en'
  //                })
  //         }
  //     }
   
      // const translateText=()=>{
      //      const newText=text.toggleTranslation();
      //      setText(newText)
  
      // }

    
    const changeToUpperCase=()=>{

        //console.log(""+text)
       // const newText=text.toUpperCase();
       const textArea = document.getElementById('TextBox');
       const selectedText =  textArea.value.substring(textArea.selectionStart, textArea.selectionEnd)
       const newText = text.replace(selectedText,selectedText.toUpperCase())
        setText(newText)
        props.showAlert('converted to upper case','success')
    }
    const changeToLowererCase=()=>{
        //console.log(""+text)
       // const newText=text.toLowerCase();
       const textArea = document.getElementById('TextBox');
       const selectedText =  textArea.value.substring(textArea.selectionStart, textArea.selectionEnd)
       const newText = text.replace(selectedText,selectedText.toLowerCase())
        setText(newText)
        props.showAlert('converted to lower case','success')
    }
    const clearText=()=>{
      //console.log(""+text)
     // const newText="";
       const textArea = document.getElementById('TextBox');
       const selectedText =  textArea.value.substring(textArea.selectionStart, textArea.selectionEnd)
       const newText = text.replace(selectedText,'')
      setText(newText)
      props.showAlert('cleared text','success')
  }
  // const boldText = () => {
  //   const getText = document.getElementById('TextBox');
  //   const selectedText = getText.value.substring(getText.selectionStart, getText.selectionEnd);
  //   const bold = document.document.querySelector('.form-control').innerHTML=selectedText.bold()
  //   const newText = text.replace(selectedText,bold )
  //   setText(newText)
  // }
  
  
  
  

  const textCopy=()=>{
    const text = document.getElementById('TextBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('copied to clipboard','success')

  }
   
  const removeExtraSpaces=()=>{
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('removed extra spaces','success')
  }

  
   const handleOnChange=(event)=>{
    setText(event.target.value)
    }

  /* we are writing onchange as we need to the event of typing */  
    const [text,setText]=useState('');

  return (
  <>
   <div className="conatiner"style={{color:props.mode==='dark'?'white':'black'}}> 
    <h1 className='px-4'>{props.heading}</h1>
    <div className="my-3 mx-4">      
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(16 44 44)':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?'1.5px solid cyan':'1px solid black'}}id="TextBox" rows="10"></textarea>
    </div>
   <div className='mx-4'>
    <button type="button" className="btn btn-outline-info mx-2" onClick={changeToUpperCase}>Upper Case</button>
    <button type="button"className="btn btn-outline-warning mx-2" onClick={changeToLowererCase}>Lower Case</button>
    <button type="button"className="btn btn-outline-danger mx-2" onClick={clearText}>Clear Text</button>
    {/* <button type="button"className="btn btn-danger mx-2" onClick={toggleTranslation}>Translate</button> */}
    <button type="button"className="btn btn-outline-primary mx-2" onClick={textCopy}>Copy Text</button>
    <button type="button"className="btn btn-outline-light mx-2" onClick={removeExtraSpaces}>Remove Extra Space</button>
    </div> 
   {/* <button type="button"className="btn btn-dark mx-2" onClick={boldText}>Bold</button> */}
   </div>
   <div className="conatiner my-3 mx-4"style={{color:props.mode==='dark'?'white':'black'}}>
    <h4>Your text summary</h4>
     <p> {text.split(" ").length-1} words , {text.length} characters</p>
     <p>{0.008*text.split(" ").length} minutes to read</p>
     <h3>Preview</h3>
     <p>{text}</p>
   </div>
</>
  )
}
