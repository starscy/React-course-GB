import React from "react";
import MyLink from "../components/UI/link/MyLink";

import HomePage from "./HomePage";

const NotFoundPage = () => {
  return (
    <div>
      Страница не найдена.{" "}
      <MyLink to="/" element={<HomePage />}>
        Перейти на главную
      </MyLink>
    </div>
  );
};

export default NotFoundPage;
