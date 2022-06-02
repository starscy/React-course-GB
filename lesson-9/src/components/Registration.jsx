import React, { useEffect, useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerInitiate, registerStart } from "../redux/actions/actions";
import { REGISTER_START } from "../redux/actions/actionType";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.user);
  const navigate = useNavigate();

  console.log(currentUser, "currentUser");

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return console.log("Wrong password");
    }
    console.log(email, password, name);

    dispatch(registerInitiate(email, password, name));

    //  dispatch(registerInitiate(email, password, name));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MyInput
          type="text"
          placeholder="Имя пользователя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></MyInput>
        <MyInput
          type="text"
          placeholder="Почтовый адрес"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></MyInput>
        <MyInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></MyInput>
        <MyInput
          type="password"
          placeholder="Подтверждение пароля"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></MyInput>
        <MyButton type="submit">Register</MyButton>
      </form>
    </div>
  );
};

export default Registration;
