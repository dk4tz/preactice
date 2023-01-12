import { configureStore } from '@reduxjs/toolkit';

const counterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const initialState = { counter: 0 };

const store = configureStore({
  reducer: counterReducer,
  preloadedState: initialState,
});

export default store;
