import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
const prefix = 'main';

// Use as ref
export const setTweets = createAction<any>(`${prefix}/setTweets`);

// export const getUser = createAsyncThunk(
//   `${prefix}/getUser`,
//   async (payload: GetUserPayload, {rejectWithValue}) => {
//     try {
//       const response = await api.get(`/users/${payload.username}`)
//       return response.data;
//     } catch (err: any) {
//       const resp = err?.response;
//       return rejectWithValue(resp.data?.message);
//     }
//   },
// );
