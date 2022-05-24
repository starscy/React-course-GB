import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MessagesList from "./MessagesList";
import { useDispatch, useSelector } from "react-redux";

const Chat = ({ chatId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const messages = useSelector((state) => state.messages.messages);

  let messageList = [];
  if (chatId && messages[`id${chatId}`]) {
    messageList = messages[`id${chatId}`];
  }

  const postMessage = () => {
    const messageObj = {
      [`id${chatId}`]: { text: title, author: "User" },
    };
    console.log(messageList, "messageList");
    console.log(messageObj, "messageObj");
    console.log(Object.keys(messageObj).join(""), "  key");
    console.log(Object.values(messageObj), "  value");
    dispatch({ type: "SEND_MESSAGE", payload: messageObj });
    console.log(messages);
  };

  return (
    <div className="dfjcc">
      <div className="chat">
        {messageList.map((item) => (
          <div className="messageBlock" key={Math.random() + Math.random()}>
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

export default Chat;

/*

 let filterChats = chats.filter((chat) => chat.id == chatId);
  let messageList = [];
  if (filterChats.length !== 0) {
    messageList = filterChats[0].messages;
  }
  
  const postMessage = () => {
    console.log(chats, "chats");
    console.log(filterChats, "filterChats");

    //  setChats(...messageList, { text: title, author: "User - 1" });
  };

  */
