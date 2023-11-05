import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/atoms/TodoState";

// eslint-disable-next-line react/prop-types
const Todo = ({ text, id }) => {
  const setTodos = useSetRecoilState(todoListState);

  const handleRemoveClick = () => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={handleRemoveClick}>remove</button>
    </div>
  );
};

export default Todo;
