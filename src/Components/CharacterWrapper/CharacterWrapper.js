// import all components that go in wrapper, css, error comp
import React, { useEffect, useState } from "react";
import { getPromise } from "../../apiCalls";
import Race from "../Race/Race";
import Class from "../Class/Class";
import Equipment from "../Equipment/Equipment";

// Comp function // pass props?
function CharacterWrapper({ endpoints }) {
  const [classEndpoint, setClassEndpoint] = useState([]);
  const [classData, setClassData] = useState([]);
  const [raceEndpoint, setRaceEndpoint] = useState([]);
  const [race, setRace] = useState([]);

  useEffect(() => {
    getPromise(endpoints.classes).then((data) => {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      console.log("Classs data:", data.results[randomIndex]);
      setClassEndpoint(data.results[randomIndex]);
    });
    getPromise(endpoints.races).then((data) => {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      console.log("races data:", data.results[randomIndex]);
      setRaceEndpoint(data.results[randomIndex]);
    });
  }, []);

  useEffect(() => {
    classEndpoint.url && getPromise(classEndpoint.url).then((currentClassData) => {
      console.log("currentClassData", currentClassData);
      setClassData(currentClassData);
    });
  }, [classEndpoint]);

  useEffect(() => {
    raceEndpoint.url && getPromise(raceEndpoint.url).then((currentRaceData) => {
      console.log("currentRaceData", currentRaceData);
      setRace(currentRaceData);
    });
  }, [raceEndpoint]);
  console.log('race', race)

  return (
    <div>
      {/* <fav button></fav> */}
      {/* //detail components */}
      {race && <Race race={race} />}
      {classData && <Class classData={classData} />}
      {classData && <Equipment classData={classData} />}
    </div>
  );
}

export default CharacterWrapper;
