import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    
      options={{
        strings: [
          "Hello World!",
          "My name is Reuel Mendoza.",
          "Welcome to my website!" 
          
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 2500
      }}
    
    />
  );
}

export default Type;
