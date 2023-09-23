import React, { useEffect, useState } from "react";
import { getPromise } from "./apiCalls";
import Header from "./Components/Header/Header";
import CharacterWrapper from "./Components/CharacterWrapper/CharacterWrapper";
import "./App.css";
import { Route, Routes } from "react-router-dom";

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
      <Header />
      {endpoints ? (
        <>
          <CharacterWrapper endpoints={endpoints} />
        </>
      ) : (
        false
      )}
      <Routes>
        <Route path="/" /> // *ADD ELELMENT HOME WRAPPER* //
        {/* <Route path="/random" element={<CharacterWrapper endpoints={endpoints} />} /> */}
        <Route path="/favorites" />  // *ADD ELELMENT FAVORITES WRAPPER* //
        <Route path="/*" />  // *ADD ELELMENT ERROR COMP* //
      </Routes>
    </main>
  );
}

export default App;
