import {AnyAction} from 'redux'
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./action";
export interface store {
  todos: Array<string>;
}

const init: store = { todos: [] };
export const reducer = (store: store = init, { type, payload }: AnyAction) => {
  // console.log(type,payload,store)
  console.log(payload)
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: [...store.todos, payload] };
    case DELETE_TODO:
      return { ...store, todos: store.todos.filter((e, i) => i !== +payload) };
    case EDIT_TODO:
      return { ...store, todos: store.todos.map((e,i)=>i===payload.index ? payload.text : e) };
    default:
      return store;
  }
};
