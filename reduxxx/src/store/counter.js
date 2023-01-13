import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; // in createSlice --> you can "mutate" state (redux toolkit handles preventing mutability behind the scenes)
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload.value;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;

// ** This reducer would works too, but reducers are easier to implement using redux @reduxjs/toolkit **
// const counterReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case 'INCREASE':
//       return {
//         counter: state.counter + action.value,
//         showCounter: state.showCounter,
//       };
//     case 'DECREMENT':
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case 'TOGGLE':
//       return { counter: state.counter, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };
