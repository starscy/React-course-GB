import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../components/UI/button/MyButton";
import { setUsers, getUsers } from "../redux/actions/actions";
import { loadApiReducer } from "../redux/reducers/apiReducer";

const API = () => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();
  console.log(error, "error");

  const loadUsers = () => {
    dispatch(getUsers());
  };

  if (loading) {
    return (
      <div>
        <h2>Идет загрузка...</h2>
        <MyButton onClick={loadUsers}>Retry</MyButton>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>Произошла ошибка на сервере</h2>
        <MyButton onClick={loadUsers}>Retry</MyButton>
      </div>
    );
  }

  return (
    <div>
      <button onClick={loadUsers}>Загрузка пользователей</button>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default API;
