import { createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "./users/UserReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import modalReducer from "./Modal/ModalReducer";

const rootReducer = combineReducers({
  Modal: modalReducer,
  User: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
