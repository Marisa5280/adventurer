import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getPromise } from "../../apiCalls";

function Class({
  classData,
  setClassData,
  endpoint,
  setError,
  setSelectedClass,
}) {
  useEffect(() => {
    getPromise(endpoint)
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        getPromise(data.results[randomIndex].url).then((currentClassData) => {
          console.log("currentClassData", currentClassData);
          setClassData(currentClassData);
          setSelectedClass(currentClassData.name);
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
    classData && (
      <div className="class-container">
        <h2 className="class-title">Class: {classData.name}</h2>
        <ul className="class-details"></ul>
      </div>
    )
  );
}

export default Class;

Class.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object),
  charClass: PropTypes.shape({
    index: PropTypes.string,
    name: PropTypes.string,
    hit_die: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    proficiency_choices: PropTypes.arrayOf(PropTypes.object),
    proficiencies: PropTypes.arrayOf(PropTypes.object),
    saving_throws: PropTypes.arrayOf(PropTypes.object),
    starting_equipment: PropTypes.arrayOf(PropTypes.object),
    starting_equipment_options: PropTypes.arrayOf(PropTypes.object),
    class_levels: PropTypes.string,
    multi_classing: PropTypes.object,
    subclasses: PropTypes.arrayOf(PropTypes.object),
    url: PropTypes.string,
  }),
};
