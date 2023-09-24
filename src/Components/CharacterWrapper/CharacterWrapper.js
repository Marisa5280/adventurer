// import all components that go in wrapper, css, error comp
import React, { useState } from "react";
import Race from "../Race/Race";
import Class from "../Class/Class";
import Equipment from "../Equipment/Equipment";
import Alignment from "../Alignment/Alignment";
import Proficiency from "../Proficiency/Proficiency";
import Background from "../Background/Background";
import "./CharacterWrapper.css";
import AbilityScores from "../AbilityScores/AbilityScores";

function CharacterWrapper({ endpoints, nameValue, setError, addCharacter }) {
  const [classData, setClassData] = useState(null);
  const [race, setRace] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");

  const newCharacter = {
    class: selectedClass,
  };

  return (
    <div className="character-wrapper">
      <button
        className="save-character"
        onClick={() => addCharacter(newCharacter)}
      >
        Save Character
      </button>
      <div className="upper-container">
        <div className="details">
          {race && <Alignment race={race} />}
          <Race
            race={race}
            setRace={setRace}
            endpoint={endpoints.races}
            setError={setError}
          />
        </div>
        <div className="class-container">
          <h2 className="character-name">Name: {nameValue}</h2>
          <Class
            classData={classData}
            setClassData={setClassData}
            endpoint={endpoints.classes}
            setError={setError}
            setSelectedClass={setSelectedClass}
          />
          <Background endpoint={endpoints.backgrounds} setError={setError} />
        </div>
        <div className="details">
          {classData && <Equipment classData={classData} />}
          {race && <Proficiency race={race} classData={classData} />}
        </div>
      </div>
      <div className="lower-container">
        <AbilityScores
          className="ability-scores"
          endpoint={endpoints["ability-scores"]}
          setError={setError}
        />
      </div>
    </div>
  );
}

export default CharacterWrapper;
