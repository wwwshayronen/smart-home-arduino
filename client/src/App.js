import "./App.css";
import React, { useEffect, useState } from "react";
import fetchHook from "./FetchHook";
import Date from "./Date"

const  App = () => {
  const [turn, setTurn] = useState(false);
  const [date, setDate] = useState("");

  const handleButtonClick = () => {
    fetchHook(date);
  };


  return (
    <div className="App">
      <h1>Arduino smart home</h1>
      <Date />
    </div>
  );
}

export default App;
