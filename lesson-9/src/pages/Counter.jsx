import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../components/UI/button/MyButton";
import { addCount, subCount } from "../redux/actions/actions";
import { CLICK } from "../redux/actions/actionType";
import { store } from "../redux/configStore";

const Counter = () => {
  const count = useSelector((store) => store.count.count);
  const text = useSelector((store) => store.users);
  console.log(text, "usersTest");
  const dispatch = useDispatch();
  console.log(store, "store");
  return (
    <div>
      <h1>Conter</h1>
      <div className="dfjccc">
        <MyButton onClick={() => dispatch(subCount())}>-</MyButton>
        {count}
        <MyButton onClick={() => dispatch(addCount())}>+</MyButton>
      </div>
    </div>
  );
};

export default Counter;
