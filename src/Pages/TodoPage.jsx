import React from "react";
import Todo from "../Components/Todo";
import { Provider } from "react-redux";
import store from "../Components/Store";

function TodoPage() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}

export default TodoPage;
