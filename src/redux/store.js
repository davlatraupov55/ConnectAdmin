import { createStore, applyMiddleware } from "redux";
import { mainReducer } from "./redusers";
import thunk from 'redux-thunk'

export const store = createStore(mainReducer, applyMiddleware(thunk));