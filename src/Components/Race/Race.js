import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getPromise } from "../../apiCalls";

function Race({ race, setRace, endpoint, setError }) {
  useEffect(() => {
    getPromise(endpoint)
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        getPromise(data.results[randomIndex].url).then((currentRaceData) => {
          console.log("currentRaceData", currentRaceData);
          setRace(currentRaceData);
        });
      })
      .catch((error) =>
        setError({
          hasError: true,
          message: `${error.message}`,
        })
      );
  }, []);

  return (
    race && (
      <div className="race-container details-card">
        <h2 className="race-title">Race: {race.name}</h2>
        <ul className="race-details">
          <li className="race-age">Age: {race.age}</li>
          <li className="race-size">Size: {race.size_description}</li>
          <li className="race-speed">Speed: {race.speed}</li>
          <li className="race-languages">Languages: {race.language_desc}</li>
        </ul>
      </div>
    )
  );
}

export default Race;

Race.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.shape({
    index: PropTypes.string,
    name: PropTypes.string,
    speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ability_bonuses: PropTypes.arrayOf(PropTypes.object),
    ability_bonus_options: PropTypes.object,
    alignment: PropTypes.string,
    age: PropTypes.string,
    size: PropTypes.string,
    size_description: PropTypes.string,
    starting_proficiencies: PropTypes.array,
    starting_proficiency_options: PropTypes.object,
    languages: PropTypes.arrayOf(PropTypes.object),
    language_options: PropTypes.object,
    language_desc: PropTypes.string,
    traits: PropTypes.arrayOf(PropTypes.object),
    subraces: PropTypes.array,
    url: PropTypes.string,
  }),
};
