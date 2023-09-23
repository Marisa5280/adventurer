// import all components that go in wrapper, css, error comp
import React, { useState } from "react";
import Race from "../Race/Race";
import Class from "../Class/Class";
import Equipment from "../Equipment/Equipment";
import Alignment from "../Alignment/Alignment";
import Proficiency from "../Proficiency/Proficiency";
import Background from "../Background/Background";
import "./CharacterWrapper.css";

function CharacterWrapper({ endpoints, nameValue }) {
  const [classData, setClassData] = useState(null);
  const [race, setRace] = useState(null);

  return (
    <div>
      {/* <fav button></fav> */}
      <div className="upper-container">
        <div className="details">
          {race && <Alignment race={race} />}
          <Race race={race} setRace={setRace} endpoint={endpoints.races} />
          <Background endpoint={endpoints.backgrounds} />
        </div>
        <div className="class-container">
        <p className="character-name">Name: {nameValue}</p>
          <Class
            classData={classData}
            setClassData={setClassData}
            endpoint={endpoints.classes}
          />
        </div>
        <div className="details">
          {classData && <Equipment classData={classData} />}
          {race && <Proficiency race={race} classData={classData} />}
        </div>
      </div>
    </div>
  );
}

export default CharacterWrapper;
