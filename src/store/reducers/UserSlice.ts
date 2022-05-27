import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/User';
import { fetchUsers } from './ActionCreators';

interface UserState {
  users: User[];
  isLoading: boolean;
  error: string;
  userCount: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  userCount: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserCount(state, action: PayloadAction<number>) {
      state.userCount += action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
