import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodoCreater } from "../redux/action";
import { store } from "../redux/reducer";
import { TodoItems } from "./TodoItems";


export const TodoInput = ()=>{
    const dispatch = useDispatch();
    const todos = useSelector((store:store)=>store.todos) 
    const [text ,setText ] = useState<string>("")

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
     }

     const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         dispatch(addTodoCreater(text))
     }
     return <div>
          <form action="" onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter a todo" onChange={handleChange}/>
              <input type="submit" />
          </form>
          <TodoItems />
     </div>
}