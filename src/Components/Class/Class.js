import React, { useEffect } from "react";
import { getPromise } from "../../apiCalls";

function Class({ classData, setClassData, endpoint }) {

  useEffect(() => {
    getPromise(endpoint)
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        getPromise(data.results[randomIndex].url).then((currentClassData) => {
          console.log("currentClassData", currentClassData);
          setClassData(currentClassData);
        });
      });
  }, []);

  return (
    <div className="class-container">
      <h2 className="class-title">Class: {classData.name}</h2>
      <ul className="class-details"></ul>
    </div>
  );
}

export default Class;
