export const customMiddleWare = store => next => action => {
    console.log("Custom Middleware Triggered:", action);
    next(action);
  }