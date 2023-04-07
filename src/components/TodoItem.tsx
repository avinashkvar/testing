import { useDispatch } from "react-redux";
import { deleteTodoCreater, editTodoCreater } from "../redux/action";
import { useState } from "react";
interface TodoItemInterface {
  item: string;
  index: number;
}

export const TodoItem = ({ item, index }: TodoItemInterface) => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>(item);

  const [edit, setEdit] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleEdit = ()=>{
     const payload = {
         text,
         index
     }
     dispatch(editTodoCreater(payload))
     setEdit(false)
  }
  return (
    <div>
      {edit ? (
        <input type="text" value={text} onChange={handleChange} />
      ) : (
        <h1>
          {index + 1} {item}
        </h1>
      )}
      {edit ? (
        <button onClick={() => handleEdit()}>Done</button>
      ) : (
        <>
          <button onClick={() => dispatch(deleteTodoCreater(index.toString()))}>
            Delete
          </button>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
};
