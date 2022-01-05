const { createStore } = require("redux");

const initialState = { counter: 0, show: true };

const reducerFunction = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      show: state.show,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      show: !state.show,
    };
  }

  return state;
};

const store = createStore(reducerFunction);

export default store;
