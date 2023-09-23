import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getPromise } from "./apiCalls";
import Header from "./Components/Header/Header";
import CharacterWrapper from "./Components/CharacterWrapper/CharacterWrapper";
import HomeWrapper from "./Components/HomeWrapper/HomeWrapper";
import "./App.css";

function App() {
  const [endpoints, setEndpoints] = useState();
  const [nameValue, setNameValue] = useState("");

  useEffect(() => {
    getPromise().then((data) => {
      console.log("data:", data);
      setEndpoints(data);
    });
  }, []);

  return (
    <main className="App">
      <Header />

      {/* {endpoints ? (
        <>
          <CharacterWrapper endpoints={endpoints} />
        </>
      ) : (
        false
      )} */}
      <Routes>
        <Route path="/" element={<HomeWrapper setNameValue={setNameValue}/>} /> // *ADD ELELMENT HOME
        WRAPPER* //
        <Route
          path="/random"
          element={<CharacterWrapper endpoints={endpoints} nameValue={nameValue}/>}
        />
        {/* <Route path="/favorites" />  // *ADD ELELMENT FAVORITES WRAPPER* // */}
        {/* <Route path="/*" />  // *ADD ELELMENT ERROR COMP* // */}
      </Routes>
    </main>
  );
}

export default App;
