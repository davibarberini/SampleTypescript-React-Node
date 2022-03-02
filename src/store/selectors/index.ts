import { createSelector } from '@reduxjs/toolkit';
import MainReducer from '../reducers/main'


export const getMainSlice = (
  state: any
): ReturnType<typeof MainReducer> => state.main;

