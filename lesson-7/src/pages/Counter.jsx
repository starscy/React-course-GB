import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../components/UI/button/MyButton";
import { CLICK } from "../redux/actions/actionType";
import { store } from "../redux/configStore";

const Counter = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(store, "store");
  return (
    <div>
      <h1>Conter</h1>
      <div className="dfjccc">
        <MyButton onClick={() => dispatch({ type: CLICK })}>-</MyButton>

        <MyButton onClick={() => dispatch({ type: CLICK })}>+</MyButton>
      </div>
    </div>
  );
};

export default Counter;
