import React, { useEffect, useState } from "react";
import { getPromise } from "../../apiCalls";

function Race({ race, setRace, endpoint}) {
  const [raceEndpoint, setRaceEndpoint] = useState([]);

  useEffect(() => {
    getPromise(endpoint).then((data) => {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      console.log("races data:", data.results[randomIndex]);
      setRaceEndpoint(data.results[randomIndex]);
    });
  }, []);

  useEffect(() => {
    getPromise(raceEndpoint.url).then((currentRaceData) => {
      console.log("currentRaceData", currentRaceData);
      setRace(currentRaceData);
    });
  }, [raceEndpoint]);

  return (
    <div className="race-container">
      <h2 className="race-title">Race: {race.name}</h2>
      <ul className="race-details">
        <li className="race-age">Age: {race.age}</li>
        <li className="race-size">Size: {race.size_description}</li>
        <li className="race-speed">Speed: {race.speed}</li>
        <li className="race-languages">Languages: {race.language_desc}</li>
      </ul>
    </div>
  );
}

export default Race;
