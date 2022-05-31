import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Chats from "./pages/Chats";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import Counter from "./pages/Counter";
import API from "./pages/API";

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
          <Route path="api" element={<API />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
