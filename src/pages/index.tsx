import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { userSlice } from '@store/reducers/UserSlice';
import { fetchUsers } from '@store/services/userService';
// import { userAPI } from '../src/store/services/User';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { changeUserCount } = userSlice.actions;
  const { users, isLoading, error, userCount } = useAppSelector(
    (state) => state.userReducer,
  );

  // variant with RTK Query
  // const { data: users, error, isLoading } = userAPI.useFetchAllUsersQuery('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users!</h1>
      <h2>{userCount}</h2>
      <button type="button" onClick={() => dispatch(changeUserCount(-1))}>
        minus
      </button>
      <button type="button" onClick={() => dispatch(changeUserCount(1))}>
        plus
      </button>
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name} - ${user.email}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
