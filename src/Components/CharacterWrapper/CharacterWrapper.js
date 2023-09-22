// import all components that go in wrapper, css, error comp
import React, { useEffect, useState } from "react";
import { getPromise } from "../../apiCalls";
import Race from "../Race/Race";
import Class from "../Class/Class";
import Equipment from "../Equipment/Equipment";
import Alignment from "../Alignment/Alignment";
import Proficiency from "../Proficiency/Proficiency";

// Comp function // pass props?
function CharacterWrapper({ endpoints }) {
  const [classEndpoint, setClassEndpoint] = useState([]);
  const [classData, setClassData] = useState([]);
  const [race, setRace] = useState([]);

  useEffect(() => {
    getPromise(endpoints.classes).then((data) => {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      console.log("Classs data:", data.results[randomIndex]);
      setClassEndpoint(data.results[randomIndex]);
    });
  }, []);

  useEffect(() => {
    classEndpoint.url &&
      getPromise(classEndpoint.url).then((currentClassData) => {
        console.log("currentClassData", currentClassData);
        setClassData(currentClassData);
      });
  }, [classEndpoint]);

  return (
    <div>
      {/* <fav button></fav> */}
      {/* //detail components */}
      {race && <Alignment race={race} />}
      {classData && <Class classData={classData} />}
      {classData && <Equipment classData={classData} />}
      {race && <Proficiency race={race} classData={classData} />}
      {race && <Race race={race} setRace={setRace} endpoint={endpoints.races}/>}
    </div>
  );
}

export default CharacterWrapper;
