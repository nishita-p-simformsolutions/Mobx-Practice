import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import TodoStore from "./Store";

ReactDOM.render(
  <TodoList store={TodoStore} />,
  document.getElementById("root")
);
