import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "💔": "Broken Heart",
  "💚": "Jealousy or Possessive Love",
  "💜": "Support and close bonds",
  "🙂": "Smiling",
  "😉": "Winking"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " Not in Database, try other emoji 🙂";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji Dictionary</h1>
      <p> Enter the emoji and get the real meaning </p>
      <input onChange={emojiInputHandler} />

      <div>
        <p></p>
        <strong> {meaning} </strong> <h3> Emojis we know </h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontsize: "2rem", padding: "1rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
