/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../models/User';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}` }),
  tagTypes: ['users'],
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], ''>({
      query: () => ({
        url: '/users',
      }),
      providesTags: ['users'],
    }),
  }),
});
