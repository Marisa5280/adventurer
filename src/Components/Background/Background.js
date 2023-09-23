import React, { useEffect, useState } from "react";
import { getPromise } from "../../apiCalls";

function Background({ endpoint }) {
  const [bgName, setBgName] = useState(null);
  const [bgDetails, setBgDetails] = useState(null);

  useEffect(() => {
    getPromise(endpoint)
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        getPromise(data.results[randomIndex].url).then((currentBackground) => {
          console.log("currentBackground", currentBackground);
          setBgName(currentBackground.name);
          getPromise(currentBackground.url).then((details) => {
            setBgDetails(details.feature.desc);
          })
        })
      });
  }, []);

  return bgName && (
    <div className="class-container details-card">
      <h2 className="class-title">Background: {bgName}</h2>
      <p>{bgDetails}</p>
    </div>
  );
}

export default Background;
