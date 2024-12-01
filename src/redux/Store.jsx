import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
