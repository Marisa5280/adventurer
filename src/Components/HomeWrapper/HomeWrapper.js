import { useState } from "react";
import "./HomeWrapper.css";
import { NavLink } from "react-router-dom";

function HomeWrapper({ setNameValue }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRandomCharacterClick = () => {
    setNameValue(inputValue);
  };

  return (
    <div className="home-wrapper">
      <h2 className="home-welcome">Welcome Adventurer</h2>
      <input
        type="text"
        placeholder="Enter Character Name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <NavLink className='random-button' to="/random" onClick={handleRandomCharacterClick}>Random Character</NavLink>
    </div>
  );
}

export default HomeWrapper;
