import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../components/UI/button/MyButton";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Conter</h1>
      <div className="dfjccc">
        <MyButton onClick={() => dispatch({ type: "sub" })}>-</MyButton>
        {count}
        <MyButton onClick={() => dispatch({ type: "add" })}>+</MyButton>
      </div>
    </div>
  );
};

export default Counter;
