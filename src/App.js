import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { getPromise } from "./apiCalls";
import Header from "./Components/Header/Header";
import CharacterWrapper from "./Components/CharacterWrapper/CharacterWrapper";
import HomeWrapper from "./Components/HomeWrapper/HomeWrapper";
import "./App.css";
import Error from "./Components/Error/Error";

function App() {
  const [endpoints, setEndpoints] = useState();
  const [nameValue, setNameValue] = useState("");
  const [error, setError] = useState({
    hasError: false,
    message: "Oops try again Later",
  });

  useEffect(() => {
    getPromise()
      .then((data) => {
        console.log("data:", data);
        setEndpoints(data);
      })
      .catch((error) =>
      {console.log(error.message)
        setError({
          hasError: true,
          message: `${error.message}` || 'Oops try again Later',
        })}
      );
  }, []);

  const resetError = () => {
    setError({ hasError: false, message: "Oops try again Later" });
  };

  return (
    <main className="App">
      <Header />
      {error.hasError && <Navigate to="/*" />}
      {/* {endpoints ? (
        <>
          <CharacterWrapper endpoints={endpoints} />
        </>
      ) : (
        false
      )} */}
      <Routes>
        <Route path="/" element={<HomeWrapper setNameValue={setNameValue} />} />
        <Route
          path="/random"
          element={
            <CharacterWrapper
              endpoints={endpoints}
              nameValue={nameValue}
              setError={setError}
            />
          }
        />
        {/* <Route path="/favorites" /> */}
        <Route path="/*" element={<Error error={error} resetError={resetError} />} />
      </Routes>
    </main>
  );
}

export default App;
