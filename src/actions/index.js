// Action Types
export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const DRAG_END = 'DRAG_END';

// Action Creators
export const addData = (newData) => ({
  type: ADD_DATA,
  payload: newData,
});

export const editData = (index, newData) => ({
  type: EDIT_DATA,
  payload: { index, newData },
});

export const deleteData = (index) => ({
  type: DELETE_DATA,
  payload: index,
});

export const dragEnd = (result) => ({
  type: DRAG_END,
  payload: result,
});
