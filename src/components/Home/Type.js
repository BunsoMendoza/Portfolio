import React from "react";
import TypeWriterEffect from "../TypewriterEffect";

function Type() {
  const typedText = [
    { id: 1, text: "Hi, I'm Reuel Mendoza,", startDelay: 100},
    { id: 2, text: "An Entry Level Software Engineer", startDelay: 2200},
    
  ];
  return (
    <div>
      {
  typedText.map((data) => (
  

      <TypeWriterEffect
        textStyle={{
          fontFamily:
            'Futura',
        }}
        startDelay={data.startDelay}
        cursorColor="black"
        text={data.text}

        typeSpeed={50}
        hideCursorAfterText="true"
      />
     ))}
    </div>
     
  );
}

export default Type;
