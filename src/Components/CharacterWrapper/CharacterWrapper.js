// import all components that go in wrapper, css, error comp
import React, { useEffect, useState } from "react";
import Race from "../Race/Race";
import Class from "../Class/Class";
import Equipment from "../Equipment/Equipment";
import Alignment from "../Alignment/Alignment";
import Proficiency from "../Proficiency/Proficiency";

function CharacterWrapper({ endpoints }) {
  const [classData, setClassData] = useState([]);
  const [race, setRace] = useState([]);

  return (
    <div>
      {/* <fav button></fav> */}
      {race && <Alignment race={race} />}
      {classData && <Class classData={classData} setClassData={setClassData} endpoint={endpoints.classes}/>}
      {classData && <Equipment classData={classData} />}
      {race && <Proficiency race={race} classData={classData} />}
      {race && <Race race={race} setRace={setRace} endpoint={endpoints.races}/>}
    </div>
  );
}

export default CharacterWrapper;
