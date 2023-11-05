import { useRecoilState } from "recoil";
import { todoListState } from "../state/atoms/TodoState";
import { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.floor(Math.random() * 1000), text: inputValue },
    ]);
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClearClick = () => {
    setTodos([]);
  };

  console.log({ todos });
  return (
    <main>
      <input
        onChange={handleChange}
        type="text"
        value={inputValue}
        id="todoinput"
      />
      <button style={{ cursor: "pointer" , margin:"10px"}} onClick={handleClick}>
        Add Todo
      </button>
      <button style={{ cursor: "pointer" }} onClick={handleClearClick}>
        Clear All Todos
      </button>
      {todos?.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
};

export default Todos;
