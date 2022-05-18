import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MessagesList from "./MessagesList";

/*

*/

const Chat = ({ chats, chatId, setChats }) => {
  //const [filterChats, setFilterChats] = useState("");
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  //setFilterChats(chats.filter((chat) => chat.id == chatId));
  let filterChats = chats.filter((chat) => chat.id == chatId);
  let messageList = "";
  if (filterChats.length !== 0) {
    messageList = filterChats[0].messages;
  }

  console.log(messageList, "Mlist");
  console.log(filterChats, "filetChat");

  const postMessage = () => {
    console.log(chats, "chats");
    console.log(filterChats, "filterChats");

    //  setChats(...messageList, { text: title, author: "User - 1" });
  };

  return (
    <div className="dfjcc">
      <div className="chat">
        {messageList.map((item) => (
          <div className="messageBlock" key={MessagesList.length}>
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
const { id } = useParams();
  const location = useLocation();
  console.log(location.state.chats);
  console.log(chats);
  console.log(state);
  console.log(id);
  const messageList = location.state.chats.filter((chat) => id == chat.id);
  console.log(messageList);
  ========================

 const [messageList, setMessageList] = useState([]);
  const { id } = useParams();
  console.log(id);
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
    
  };

  useEffect(() => {
    setTimeout(() => console.log("Ответ от робота "), 1500);
  }, [messageList]);



<div className="chat">
        <h2>{titleChat}</h2>
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

*/
