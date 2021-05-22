import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import notesReducer from "./notesReducer";

let reducers = combineReducers({
  notesPage: notesReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)));

window.store = store;
export default store;
