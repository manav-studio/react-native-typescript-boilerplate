import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { userType } from '@stores/user.types';
import { getUser } from '../api/fakeApiUser';
import { RootState } from '@stores/index';

export const fetchUser = createAsyncThunk('user/getUser', async () => {
  const response = await getUser();
  return response.data;
});

const userAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    isWaitingResponse: false,
  } as userType),
  reducers: {
    setWaitingResponse: (state, action) => {
      state.isWaitingResponse = action.payload;
    },
  },
});

export const { selectAll } = userAdapter.getSelectors(
  (state: any) => state.members,
);

export const { setWaitingResponse } = userSlice.actions;
export const isWaitingResponse = (state: RootState) =>
  state.user.isWaitingResponse;

export default userSlice.reducer;
