import React, { useState } from "react";

const customDictionary = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];

  export default function Dictionary(){

    const [inputWord, setinputWord] = useState('');
    const [meaning, setMeaning] = useState('');


    const handleSearch = () => {
        const result = customDictionary.find(entry => 
            entry.word.toLowerCase() === inputWord.toLowerCase()
          );
          if (result) {
            setMeaning(result.meaning);
          } else {
            setMeaning('Word not found in the dictionary.');
          }
    };

    return(
        <div>
        <h1>Dictionary App</h1>
        <input 
        type="text"
        value={inputWord}
        onChange={(e) => setinputWord(e.target.value)}
        placeholder="Search for a word..."
         />
         <button onClick={handleSearch}>Search</button>
         {meaning && (
            <div>
                <p><strong>Definition:</strong></p>
                <p>{meaning}</p>
            </div>
        )}
      </div>
    );

  }