import React, { Component } from "react";
import { useState } from 'react';

function CalculatorTitle() {


   //New Syntax for setState - Recovered from beta.ReactJS Docu - Official. Solo busca useState y viene con exemplos.
   const [count, setCount] = useState(0);

   function handleClick() {
     setCount(count + 1);
   }

   function altternClick(){
      setCount(count + 10);
      console.log("10 Times Pressed now ! ! ");
   }

   

   return (
      <><h1>This is the CalculatorTitle Component</h1>
         <h3>Using useState Hooks</h3>
         <h3>Better Practices</h3>

         <button onClick={handleClick}>
            You pressed me {count} times
         </button>
         <button onClick={altternClick}>
               Alternative Button
         </button>
      </>
   )
}

export default CalculatorTitle;