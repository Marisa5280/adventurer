import React, { useEffect, useState } from "react";
import { getPromise } from "../../apiCalls";

function Class({ endpoint }) {
  const [classEndpoint, setClassEndpoint] = useState([]);
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    getPromise(endpoint).then((data) => {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      console.log("Classs data:", data.results[randomIndex]);
      setClassEndpoint(data.results[randomIndex]);
    });
  }, []);

  useEffect(() => {
    getPromise(classEndpoint.url).then((currentClassData) => {
      console.log("currentClassData", currentClassData);
      setClassData(currentClassData);
    });
  }, [classEndpoint]);

  return (
    <div className="class-container">
      <h2 className="class-title">Class: {classData.name}</h2>
      <ul className="class-details">
      </ul>
    </div>
  );
}

export default Class;
