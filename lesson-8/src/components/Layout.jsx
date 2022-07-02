import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import MyLink from "./UI/link/MyLink";

const Layout = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "link");
  return (
    <>
      <header className="header">
        <MyLink className={setActive} to="/">
          Home
        </MyLink>
        <MyLink className={setActive} to="/profile">
          Profile
        </MyLink>
        <MyLink className={setActive} to="/chats">
          Chats
        </MyLink>
        <MyLink className={setActive} to="/counter">
          Counter
        </MyLink>
        <MyLink className={setActive} to="/api">
          API
        </MyLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Все права защищены </p>
      </footer>
    </>
  );
};

export default Layout;
