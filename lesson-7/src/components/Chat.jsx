import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MessagesList from "./MessagesList";
import { useDispatch, useSelector } from "react-redux";
import { messageSelector } from "../redux/reducers/messageReducer/messageSelector";
import { DELETE_MESSAGE } from "../redux/actions/actionType";
import { FaTimesCircle } from "react-icons/fa";
import { deleteMessage, sendMessage } from "../redux/actions/actions";

const Chat = ({ chatId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const messages = useSelector(messageSelector);

  let messageList = [];
  if (chatId && messages[`id${chatId}`]) {
    messageList = messages[`id${chatId}`];
  }

  const postMessage = () => {
    const random = Math.round(Math.random() * 100);
    const messageObj = {
      [`id${chatId}`]: {
        text: title,
        author: "User",
        id: `${chatId}${Date.now()}${random}`,
      },
    };
    dispatch(sendMessage(messageObj));
  };

  const deleteThisMessage = (messageID, chatId) => {
    const messageObject = { [chatId]: messageID };
    dispatch(deleteMessage(messageObject));
  };

  return (
    <div className="dfjcc">
      <div className="chat">
        {messageList.map((item) => (
          <div className="messageBlock" key={item.id}>
            <h3 className="messageText">{item.text} </h3>
            <p className="messageUser">{item.author}</p>
            <MyButton onClick={() => deleteThisMessage(item.id, chatId)}>
              <FaTimesCircle />
            </MyButton>
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

