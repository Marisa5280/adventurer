// import all components that go in wrapper, css, error comp
import React, { useEffect, useState } from "react";
import { getPromise } from "../../apiCalls";
import Race from "../Race/Race";
import Class from "../Class/Class";

// Comp function // pass props?
function CharacterWrapper({ endpoints }) {
  const [classEndpoint, setClassEndpoint] = useState([]);
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    getPromise(endpoints.classes).then((data) => {
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
    <div>
      {/* <fav button></fav> */}
      {/* //detail components */}
      <Race endpoint={endpoints.races} />
      {classData && <Class  classData={classData} />}
    </div>
  );
}

export default CharacterWrapper;
