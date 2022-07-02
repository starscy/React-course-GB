import React, { useRef } from "react";
import Chat from "../components/Chat";
import { useEffect, useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import { useParams } from "react-router-dom";
import MyLink from "../components/UI/link/MyLink";

import { FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ChatAddForm from "../components/ChatAddForm";
import MyModal from "../components/UI/modal/MyModal";

import { deleteChat } from "../redux/actions/actions";

const Chats = () => {
  const chats = useSelector((state) => state.chats.chats);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { id } = useParams();

  const deleteThisChat = (chatId) => {
    dispatch(deleteChat(chatId));
  };

  return (
    <div className="dfjcsb">
      <div>
        {chats.map((chat) => (
          <div className="dfjcsb" key={chat.id}>
            <MyLink to={`/chats/${chat.id}`}>
              <h2>{chat.name}</h2>
            </MyLink>
            <MyButton
              onClick={() => {
                deleteThisChat(chat.id);
              }}
            >
              <FaTimesCircle />
            </MyButton>
          </div>
        ))}

        <MyButton onClick={() => setModal(true)}>Добавить чат</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <ChatAddForm setModal={setModal} />
        </MyModal>
      </div>
      <Chat chats={chats} chatId={id} />
    </div>
  );
};

export default Chats;
