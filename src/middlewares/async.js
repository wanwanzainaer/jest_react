// export default ({ dispatch }) => {
//   return function(next) {
//     return function(action) {

//     };
//   };
// };

export default ({ dispatch }) => next => action => {
  // Check to serr  if the action has a promise on its payload property
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  //If it does, then wait for it to resolve

  //If it does not, then send the action to the next middleware

  //We want to wait for the promise to resolve (get its data) and then create

  action.payload.then(res => {
    const newAction = { ...action, payload: res };
    dispatch(newAction);
  });
};
