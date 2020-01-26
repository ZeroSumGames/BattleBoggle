import React from "react";

export default function CurrentWord(props) {
  let letters = props.letters;
  let word = "";
  letters.forEach(letter => {return (word += letter.value)});
  return <div className="current-letters">{`Currently Selected: "${word}"`}</div>;
}
