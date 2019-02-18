import { auth } from "./auth";
import { fileSystem } from "./filesystem";
import { createStore, combineReducers } from "redux";

const store = createStore(combineReducers({ auth, fileSystem }));
export default store;
