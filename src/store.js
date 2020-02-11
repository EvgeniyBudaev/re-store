import { createStore } from "redux";
import reducer from "./reducers";

import thunkMiddleware from 'redux-thunk';

// Middleware для ознакомления
import { applyMiddleware } from 'redux';
const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

const stringMiddleware = () => (next) => (action) => {
  if(typeof action === 'string') {
    return next({
      type: action
    });
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), timeout);
};

store.dispatch(delayedActionCreator(3000));

// const store = createStore(reducer);

export default store;
