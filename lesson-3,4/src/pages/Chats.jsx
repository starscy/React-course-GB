import React, { useRef } from "react";
import Chat from "../components/Chat";
import { useEffect, useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import { useParams } from "react-router-dom";
import MyLink from "../components/UI/link/MyLink";
import MessagesList from "../components/MessagesList";
import { FaTimesCircle } from "react-icons/fa";

const initialChats = [
  {
    name: "Chat-1",
    messages: [{ text: "FirstMessageCHat1", author: "AUTHOR -1" }],
    id: 11,
  },
  {
    name: "Chat-2",
    messages: [{ text: "FirstMessageHereToo!Chat2", author: "AUTHOR-2" }],
    id: 22,
  },
  {
    name: "Chat-3",
    messages: [{ text: "FirstMessageHereToo!Chat3", author: "AUTHOR-3" }],
    id: 33,
  },
  {
    name: "Chat-4",
    messages: [{ text: "FirstMessageHereToo!Chat4", author: "AUTHOR-4" }],
    id: 44,
  },
];
const Chats = () => {
  const [chats, setChats] = useState(initialChats);
  const { id } = useParams();

  const createChat = () => {
    setChats([
      ...chats,
      {
        name: `Chat-${chats.length + 1}`,
        messages: [{ text: "", author: "" }],
        id: `${chats.length}${Date.now()}`,
      },
    ]);
    initialChats.push({
      name: `Chat-${chats.length + 1}`,
      messages: [{ text: "", author: "" }],
      id: `${chats.length}${Date.now()}`,
    });
  };

  const deleteChat = (chatId) => {
    if (chatId == id) {
      alert("Выйдите из чата");
    } else {
      setChats(chats.filter((chat) => chat.id != chatId));
    }
  };

  return (
    <div className="dfjcsb">
      <div>
        {chats.map((chat) => (
          <div className="dfjcsb" key={chat.id}>
            <MyLink to={`/chats/${chat.id}`} state={{ chats }}>
              <h2>{chat.name}</h2>
            </MyLink>
            <MyButton
              onClick={() => {
                deleteChat(chat.id);
              }}
              value={chat.id}
            >
              <FaTimesCircle />
            </MyButton>
          </div>
        ))}

        <MyButton onClick={createChat}>Добавить чат</MyButton>
      </div>
      <Chat chats={chats} chatId={id} setChats={setChats} />
    </div>
  );
};

export default Chats;

/*
 {chats.map((chat) => (
        <MyLink key={chat.id} to={`/chats/${chat.name}`}>
          <h2>{chat.name}</h2>
        </MyLink>
      ))}


      initialChats.push({
      name: chats.length + 1,
      id: `chat-${Date.now()}`,
      messages: [{ text: "", author: "" }],
    });
*/
