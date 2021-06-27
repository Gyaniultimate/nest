import React from 'react';
import props from 'prop-types';
import { useState } from 'react';
import Home from './index';
const axios = require('axios');




function Translate(props) {


    const [inputText,setinputText]=useState('');
    const [translated, setTranslated] = useState('');
    const [sourceLang, setSourceLang] = useState('<?>');

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(inputText);
       
       
        const doTranslation = async () => {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: inputText,
              target: 'hi',
              key:  ''//API key here
              ,
            },
          }
        );
        setTranslated(data.data.translations[0].translatedText);
        setSourceLang(data.data.translations[0].detectedSourceLanguage);
        }
      
        doTranslation();
        if(sourceLang=='hi')
        {
         
          const doTranslation = async () => {
            const { data } = await axios.post(
              'https://translation.googleapis.com/language/translate/v2',
              {},
              {
                params: {
                  q: inputText,
                  target: 'eng',
                  key: ''//API key here
                  ,
                },
              }
            );
            setTranslated(data.data.translations[0].translatedText);
            setSourceLang(data.data.translations[0].detectedSourceLanguage);
            }
            doTranslation();
        




        }


    
  }
    return(
    
    <div className="raja">
     
    <div className="banner">
       <h1 >Welcome To Text Translator!</h1>
      {props.children}
    </div>
    <div className="inputbox">
    
    <form onSubmit={handleSubmit}>
      <br></br>
      <textarea className="textA"
        value={inputText}
        onChange={(e)=>{setinputText(e.target.value) ; }}>
          
      </textarea>
      
      <br></br>
      
      <button className="butt" style={{backgroundColor:"rgba(245,222,161,255)"}}>Translate!</button>
    </form>
    </div>
    <p className="lang">{sourceLang}</p>
    
    <div className="outputbox">
    
    
      <br></br>
       
        {translated}
        
          
      
      
      <br></br>
      
    
    </div>

    
    
    </div>
    
    );}

export default Translate

