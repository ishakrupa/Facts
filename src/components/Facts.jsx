import React,{useState,useEffect} from "react";

import './Facts.css';
;

function Facts (){
    const[quotes,setQuotes]=useState([]);
    let random=Math.floor(Math.random()*20)
    const url =`https://catfact.ninja/facts?page=${random}`
    useEffect(()=>{
      getQuote();
    },[]);
   
    const getQuote =()=>{
      fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        
        setQuotes(data.data)
        
        
    
      });
     
    };
   
    
   
  
  return (
    <>
    <h2> RANDOM FACTS ABOUT MEOW </h2>
    <h3>!! Catch MICE :) Tastes NICE :!!</h3>
    <div className="App">

      <ul>
        {quotes.map((items,i )=>
          <li key={i}>{items.fact}</li>
        
        )}
      </ul>
    </div>

  
    </>
  );
}


export default Facts
