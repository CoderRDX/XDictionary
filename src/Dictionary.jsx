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

      setMeaning('');

        if (!searchTerm) {
          setMeaning('Word not found in the dictionary.'); 
          return;
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        let foundMeaning = '';
    
        for (let i = 0; i < customDictionary.length; i++) {
          if (customDictionary[i].word.toLowerCase() === lowerCaseSearchTerm) {
            foundMeaning = customDictionary[i].meaning;
            break; 
          }
        }

        if (foundMeaning) {
          setMeaning(foundMeaning);
          console.log("Meaning:", foundMeaning);
        } else {
          setMeaning('Word not found in the dictionary.');
          console.log("Meaning:", 'Word not found in the dictionary.');
        }

        setSearchTerm('');
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
            <p>
            <strong>Definition:</strong> 
            <p>{meaning}</p>
            </p>
          </div>
        
        </div>
    );

  }