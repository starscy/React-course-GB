import { useState } from "react";
import "./App.css";
import Message from "./Message";

function App(props) {
  const text = "First lesson message";
  return (
    <div className="App">
      <Message name={text} />
    </div>
  );
}

export default App;
