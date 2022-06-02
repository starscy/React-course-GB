import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const MessagesList = ({ messages, titleChat, chats }) => {
  console.log(messages, ` messages`);
  const [messageList, setMessageList] = useState(messages);
  useEffect(() => {
    console.log("Сработал useeffect");
    setMessageList([...messageList]);
  }, [...messages]);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setMessageList([...messageList]);
  }, [id]);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const postMessage = (e) => {
    e.preventDefault();
    let messageId = messageList.length + 1;

    setMessageList([
      ...messageList,
      { text: title, author: "User - 1", id: messageId },
    ]);
    messages.push({ text: title, author: "User - 1", id: 112 });
  };

  useEffect(() => {
    setTimeout(() => console.log("Ответ от робота "), 1000);
  }, [messageList]);

  return (
    <div className="dfjcc">
      <div className="chat">
        <h2>{titleChat}</h2>
        <h3 className="messageText">{messages[0].text}</h3>
        <p className="messageUser">{messages[0].author}</p>
        {messageList.map((item) => (
          <div className="messageBlock" key={item.id}>
            <h3 className="messageText">{item.text}</h3>
            <p className="messageUser">{item.author}</p>
          </div>
        ))}

        <MyInput
          value={title}
          placeholder="Введите сообщение..."
          type="text"
          onChange={handleChange}
        />
        <MyButton onClick={postMessage}>Отправить</MyButton>
      </div>
    </div>
  );
};

export default MessagesList;

/*

 


    */
