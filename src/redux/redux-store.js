import { applyMiddleware, createStore, combineReducers } from "redux";
import ThunkMiddleware from "redux-thunk";
import notesReducer from "./notesReducer";

let reducers = combineReducers({
  notesPage: notesReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;
export default store;