import { useEffect, useState } from "react";

import "./App.css";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";

function App() {
  const [messageList, setMessageList] = useState([]);

  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const postMessage = (e) => {
    e.preventDefault();
    let messageId = messageList.length + 1;

    console.log(messageId);

    setMessageList([
      ...messageList,
      { text: title, author: "User - 1", id: messageId },
    ]);
  };

  useEffect(() => {
    setTimeout(() => console.log("Ответ от робота "), 1500);
  }, [messageList]);

  return (
    <div>
      {messageList.map((item) => (
        <div className="messageBlock" key={item.id}>
          <h3 className="messageText">{item.text}</h3>
          <p className="messageUser">{item.author}</p>
        </div>
      ))}
      <form>
        <Input
          value={title}
          type="text"
          placeholder="Введите сообщение"
          onChange={handleChange}
        />
      </form>
      <Button onClick={postMessage}>Отправить</Button>
    </div>
  );
}

export default App;
