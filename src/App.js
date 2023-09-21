import React, { useEffect, useState } from "react";
import { getPromise } from "./apiCalls";
import Race from "./Components/Race/Race";
import "./App.css";

function App() {
  const [endpoints, setEndpoints] = useState();

  useEffect(() => {
    getPromise().then((data) => {
      console.log("data:", data);
      setEndpoints(data);
    });
  }, []);

  return (
    <main className="App">
      <header className="App-header">
        <h1 className="title">Adventurer Alchemist</h1>
      </header>
      {endpoints ? (
        <>
          <Race endpoint={endpoints.races} />
          {/* rest of comps go here */}
        </>
      ) : (
        false
      )}
    </main>
  );
}

export default App;
