import { useState } from "react";
import "./App.css";
import Message from "./Message";

function App(props) {
  const text = "First lesson message";
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Текст в инпуте");
  function increment() {
    setLikes(likes + 1);
  }
  function dicrement() {
    setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button onClick={increment}>increase</button>
      <button onClick={dicrement}>dicrease</button>
      <Message name={text} />
    </div>
  );
}

export default App;
