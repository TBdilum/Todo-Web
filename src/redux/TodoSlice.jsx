import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        Title: action.payload.Title,
        Description: action.payload.Description,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.find((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    editTodo: (state, action) => {
      const { id, updatedTitle, updatedDescription } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.Title = updatedTitle || todo.Title;
        todo.Description = updatedDescription || todo.Description;
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
