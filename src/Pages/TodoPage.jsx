import Todo from "../components/Todo";
import { Provider } from "react-redux";
import store from "../redux/Store.jsx";

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
