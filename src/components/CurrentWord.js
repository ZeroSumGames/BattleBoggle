import React from "react";

export default function CurrentWord(props) {
  let letters = props.letters;
  return (
    <div className="current-letters">
      {letters &&
        letters.map(letter => {
          return( <div>{letter.value}</div>);
        })}
    </div>
  );
}
