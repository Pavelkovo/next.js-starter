import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/User';
import { fetchUsers } from '../services/userService';

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
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.error = '';
        state.users = action.payload;
      },
    );
    builder.addCase(
      fetchUsers.rejected,
      (state, action: PayloadAction<string | unknown>) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }
      },
    );
  },
});

export default userSlice.reducer;
