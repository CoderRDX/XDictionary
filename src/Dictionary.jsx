import React, { useState } from "react";

const customDictionary = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];

  export default function Dictionary(){

    const [searchTerm, setSearchTerm] = useState('');
    const [meaning, setMeaning] = useState('');


    const handleSearch = () => {
      console.log("Search Term:", searchTerm);
        if (!searchTerm) {
            setMeaning('Word not found in the dictionary.'); 
            console.log("Meaning:", 'Word not found in the dictionary.');
            return;
          }

        const result = customDictionary.find(entry => 
            entry.word.toLowerCase() === searchTerm.toLowerCase()
          );
          
          if (result) {
            setMeaning(result.meaning);
            console.log("Meaning:", result.meaning);
          } else {
            setMeaning('Word not found in the dictionary.');
            console.log("Meaning:", 'Word not found in the dictionary.');
          }
    };

    return(
        <div>

          <h1>Dictionary App</h1>
          <div>
            <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a word..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <p>
            <strong>Definition:</strong> 
            {meaning}
          </p>
        </div>
    );

  }