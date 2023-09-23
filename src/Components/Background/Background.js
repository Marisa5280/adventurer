import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getPromise } from "../../apiCalls";

function Background({ endpoint , setError}) {
  const [bgName, setBgName] = useState(null);
  const [bgDetails, setBgDetails] = useState(null);

  useEffect(() => {
    getPromise(endpoint)
      .then((data) => {
        console.log('data', data)
        const randomIndex = Math.floor(Math.random() * data.results.length);
        getPromise(data.results[randomIndex].url).then((currentBackground) => {
          console.log("currentBackground", currentBackground);
          setBgName(currentBackground.name);
          getPromise(currentBackground.url).then((details) => {
            setBgDetails(details.feature.desc);
          })
        })
      })
      .catch(error => setError({
        hasError:true,
        message: `${error.message}`
      }));
  }, []);

  return bgName && (
    <div className="class-container details-card">
      <h2 className="class-title">Background: {bgName}</h2>
      <p>{bgDetails}</p>
    </div>
  );
}

export default Background;

Background.propTypes = {
  feature: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.arrayOf(PropTypes.string)
  })
}