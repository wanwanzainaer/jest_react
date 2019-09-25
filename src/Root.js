import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers/index";
// import reduxPromise from "redux-promise";

import asyncMiddleWare from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(stateValidator, asyncMiddleWare)
  );

  return <Provider store={store}> {children} </Provider>;
};
