import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  editTodo,
} from "../redux/TodoSlice";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import { Button } from "@mui/base/Button";
import { useDarkMode } from "./DarkMode";

const Todo = () => {
  const { darkMode } = useDarkMode();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = () => {
    if (title && description) {
      dispatch(addTodo({ Title: title, Description: description }));
      setTitle("");
      setDescription("");
      handleClose();
    } else {
      alert("Please enter both a title and description.");
    }
  };

  const handleEditTodo = () => {
    if (title && description && currentTodoId) {
      dispatch(
        editTodo({
          id: currentTodoId,
          updatedTitle: title,
          updatedDescription: description,
        })
      );
      handleClose();
    }
  };
  const handleEditClick = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setTitle(todo.Title);
      setDescription(todo.Description);
      setCurrentTodoId(todo.id);
      setEditMode(true);
      handleOpen();
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundcolor: darkMode ? "#fff" : "#000",
        }}
      >
        <h1 style={{ color: darkMode ? "white" : "black" }}>Todo List</h1>

        <TriggerButton onClick={handleOpen}>+ Add New Todo</TriggerButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          slots={{ backdrop: StyledBackdrop }}
        >
          <ModalContent sx={style}>
            <h2 id="parent-modal-title" className="modal-title">
              Add new Todo
            </h2>
            <p id="parent-modal-description" className="modal-description">
              Title
            </p>
            <input
              type="text"
              value={title}
              placeholder="Todo Name Here"
              onChange={handleTitleChange}
            ></input>
            <p className="modal-description">Description</p>
            <input
              type="text"
              value={description}
              placeholder="Todo Description Here"
              onChange={handleDescriptionChange}
            ></input>
            <ModalButton onClick={editMode ? handleEditTodo : handleAddTodo}>
              {editMode ? "Update Todo" : "+ Add"}
            </ModalButton>
            <ModalButton onClick={handleClose}>Cancel</ModalButton>
          </ModalContent>
        </Modal>
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              paddingBottom: "2rem",
              paddingTop: "1rem",
              boxShadow: "0px 4px 6px rgba(0.4, 0, 0, 0.3)",
              borderRadius: "10px",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingLeft: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              <strong style={{ marginRight: "20px" }}>
                Title:{todo.Title}
              </strong>
              <br />
              Description: {todo.Description}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                paddingLeft: "auto",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                style={{ width: "100px", height: "30px" }}
              />
              <button
                onClick={() => handleEditClick(todo.id)}
                style={{
                  width: "auto",
                  height: "30px",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={{
                  width: "auto",
                  height: "30px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
};

Backdrop.displayName = "Backdrop";

export default Todo;

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled(Button)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
    outline: none;
  }
`
);

const ModalButton = styled(Button)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)"
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`
);
