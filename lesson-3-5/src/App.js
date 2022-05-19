import { useEffect, useState, useRef } from "react";
import MyList from "./components/MyList";
import "./App.css";
import {
  Button,
  TextField,
  Card,
  Typography,
  CardContent,
  Container,
  FormControl,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Chats from "./pages/Chats";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import Counter from "./pages/Counter";

function App() {
  /*
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9800",
      },
      secondary: {
        main: "#0098FF",
      },
    },
  });

  const [messageList, setMessageList] = useState([]);
  const ref = useRef(null);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const postMessage = (e) => {
    setMessageList([
      ...messageList,
      { text: title, author: "starscy", id: Date.now() },
    ]);
    ref.current.focus();
    ref.current.value = "";
  };

  useEffect(() => {
    setTimeout(() => console.log("robot answer"), 1500);
  }, [messageList]);

  const [chatArray, setChatArray] = useState([
    { name: "chat-1", id: "chat1Id " },
    { name: "chat-2", id: "chat2Id " },
    { name: "chat-3", id: "chat3Id " },
  ]);
  */

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats" element={<Chats />} />
          <Route path="chats/:id" element={<Chats />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
/* 
  <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <ThemeProvider theme={theme}>
        <MyList />
        <div>
          {messageList.map((item) => (
            <Card key={item.id}>
              <CardContent>
                <Typography>{item.text}</Typography>
                <Typography align="right">{item.author}</Typography>
              </CardContent>
            </Card>
          ))}
          <FormControl>
            <TextField
              inputRef={ref}
              autoFocus={true}
              id="outlined-basic"
              label="Введите сообщение"
              variant="outlined"
              onChange={handleChange}
            />

            <MyButton variant="contained" onClick={postMessage}>
              Отправить
            </MyButton>
          </FormControl>
        </div>
      </ThemeProvider>
    </Container>

*/
