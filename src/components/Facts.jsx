import React,{useState,useEffect} from "react";

import './Facts.css';
function Facts() {
    const[quotes,setQuotes]=useState("");

    const getQuote =()=>{
      fetch("https://catfact.ninja/fact")
      .then((res)=>res.json())
      .then((data)=>{
    setQuotes(data)
    
      });
    };
    useEffect(()=>{
      getQuote();
    },[]);

   
  
  return (
    <>
    <h2> RANDOM FACTS ABOUT MEOW </h2>
    <h3>!! Catch MICE :) Tastes NICE :!!</h3>
    <div className="App">
      
  <div className="quote"><span> HERE MY PAW PRINTS: </span>
    <p> FunFact: {quotes.fact}</p>
    <p> Length: {quotes.length}</p>
    <div className ="btnContainer">
      <button onClick= {getQuote}
      className="btn"> Get Quote </button>
   
      
      </div>
    </div>
    </div>
    </>
  );
}


export default Facts
