import Todos from "./components/Todos";
import { TotalTodos } from "./state/selectors/TotalTodos";
import { useRecoilValue } from "recoil";

function App() {
  const TotalTodosState = useRecoilValue(TotalTodos);

  return (
    <div>
      <h1>Hey</h1>
      <Todos />
      <h3>Total Todos:{TotalTodosState}</h3>
    </div>
  );
}

export default App;
