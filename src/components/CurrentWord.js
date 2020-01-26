import React from "react";

export default function CurrentWord(props) {
  let letters = props.letters;
  return (
    <ul className="current-letters">
      {letters &&
        letters.map(letter => {
          return <li>letter</li>;
        })}
    </ul>
  );
}
