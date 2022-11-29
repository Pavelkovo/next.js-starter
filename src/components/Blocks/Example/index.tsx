import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { userSlice } from '@store/reducers/userSlice';
import { fetchUsers } from '@store/services/userService';
import Button from '@components/Pieces/Button';
import Image from 'next/image';
import { setCookie } from 'cookies-next';

import styles from './Example.module.scss';
import LinkVariant from '@components/Pieces/LinkVariant';

const Example = () => {
  const dispatch = useAppDispatch();
  const { changeUserCount } = userSlice.actions;
  const { users, isLoading, error, userCount } = useAppSelector(
    (state) => state.userReducer,
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSetCookie = () => {
    setCookie('access_token', 'aaaaabbbbccccddddeeeeefffff');
  };

  return (
    <div className={styles.root}>
      <h1>Users!</h1>
      <Image
        src="/assets/cat-placeholder.jpg"
        alt="Picture of the author"
        width={612}
        height={408}
      />
      <h2>{userCount}</h2>
      <div className={styles.buttons}>
        <Button onClick={() => dispatch(changeUserCount(-1))}>minus</Button>
        <Button onClick={() => dispatch(changeUserCount(1))}>plus</Button>
      </div>
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name} - ${user.email}`}</li>
        ))}
      </ul>
      <Button onClick={handleSetCookie}>Set Access Token</Button>
      <LinkVariant href="/protected">
        Try to access to protected page
      </LinkVariant>
    </div>
  );
};

export default Example;
