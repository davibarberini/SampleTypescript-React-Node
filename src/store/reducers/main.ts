import { createReducer } from '@reduxjs/toolkit';
import { setTweets } from '../actions/main';
const initialState = {
  tweets: [],
};
export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setTweets, (state, action) => ({
    ...state,
    tweets: action.payload,
  }));
});

export default userReducer;
