interface edit {
  text: string;
  index: number;
}
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodoCreater = (value: string) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
};

export const deleteTodoCreater = (value: string) => {
  return {
    type: DELETE_TODO,
    payload: value,
  };
};

export const editTodoCreater = (value: edit) => {
  return {
    type: EDIT_TODO,
    payload: value,
  };
};
