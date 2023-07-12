import { combineReducers } from 'redux';
import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  DRAG_END,
} from '../actions';

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case EDIT_DATA:
      const { index, newData } = action.payload;
      const updatedData = [...state];
      updatedData[index] = newData;
      return updatedData;
    case DELETE_DATA:
      return state.filter((_, index) => index !== action.payload);
    case DRAG_END:
      const { source, destination } = action.payload;
      if (!destination || destination.index === source.index) {
        return state;
      }
      const draggedData = [...state];
      const [removed] = draggedData.splice(source.index, 1);
      draggedData.splice(destination.index, 0, removed);
      return draggedData;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
