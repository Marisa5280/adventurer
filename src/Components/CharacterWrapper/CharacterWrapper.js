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

function CharacterWrapper({ endpoints, nameValue, setError }) {
  const [classData, setClassData] = useState(null);
  const [race, setRace] = useState(null);

  return (
    <div>
      {/* <fav button></fav> */}
      <div className="upper-container">
        <div className="details">
          {race && <Alignment race={race} />}
          <Race
            race={race}
            setRace={setRace}
            endpoint={endpoints.races}
            setError={setError}
          />
          <Background endpoint={endpoints.backgrounds} setError={setError} />
        </div>
        <div className="class-container">
          <p className="character-name">Name: {nameValue}</p>
          <Class
            classData={classData}
            setClassData={setClassData}
            endpoint={endpoints.classes}
            setError={setError}
          />
        </div>
        <div className="details">
          {classData && <Equipment classData={classData} />}
          {race && <Proficiency race={race} classData={classData} />}
        </div>
        <AbilityScores endpoint={endpoints['ability-scores']} setError={setError} />
      </div>
    </div>
  );
}

export default CharacterWrapper;
