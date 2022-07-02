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
import Chat from "./components/Chat";

function App() {
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
