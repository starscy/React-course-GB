import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../redux/actions/actions";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const ChatAddForm = ({ setModal }) => {
  const [name, setName] = useState("");
  const chats = useSelector((state) => state.chats.chats);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const addThisChat = () => {
    setName("");

    const randomId = Date.now();
    const createdChat = {
      id: randomId,
      name: name,
      messages: { [`${randomId}`]: [{ text: "", author: "" }] },
    };
    dispatch(addChat(createdChat));
    setModal(false);
  };

  return (
    <div>
      <MyInput value={name} onChange={handleChange} />
      <MyButton onClick={addThisChat}>Добавить чат</MyButton>
    </div>
  );
};

export default ChatAddForm;
