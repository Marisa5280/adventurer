import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPromise } from "../../apiCalls";

function AbilityScores({ endpoint, setError }) {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    getPromise(endpoint)
      .then((data) => {
        console.log("data 11", data.results);
        setAbilities(data.results);
      })
      .catch((error) =>
        setError({
          hasError: true,
          message: `${error.message}`,
        })
      );
  }, []);

  console.log("abilities res", abilities);
  const renderedAbilities = abilities.map((ability) => {
    const score = Math.floor(Math.random() * (15 + 1)) + 3;

    return (
      <div className="ability-card" key={ability.index}>
        <div className="ability-score">{score}</div>
        <h4>{ability.name}</h4>
      </div>
    );
  });
  return <div className="ability-scores">{renderedAbilities}</div>;
 
}

export default AbilityScores;

AbilityScores.propTypes = {
  endpoint: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};
