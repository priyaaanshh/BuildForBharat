import  { useEffect, useState } from "react";
import "./AutoComplete.css"; // Import your CSS file

const AutoComplete = () => {
  const suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    const filteredArray = suggestions.filter((data) =>
      data.toLowerCase().startsWith(userInput.toLowerCase())
    ).slice(0,5);

    setFilteredSuggestions(filteredArray);
  };

  const selectSuggestion = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    };
    
    useEffect(() => {
        inputValue === null || inputValue === "" ? setFilteredSuggestions([]):""
    }, [inputValue]);
    

  return (
    <div className="container">
      <div className="searchInput">
        <div className="navRow">
          <input
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>
        {filteredSuggestions.length > 0 ? (
          <div className="resultBox">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => selectSuggestion(suggestion)}>
                {suggestion}
              </li>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
