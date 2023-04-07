import { store } from "../redux/reducer";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoItems = () => {
  const todos = useSelector((store: store) => store.todos);

  return (
    <div>
      {todos.map((e, i) => (
        <TodoItem item={e} index={i} key={i} />
      ))}
    </div>
  );
};
