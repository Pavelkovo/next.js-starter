import axios from 'axios';

import { getContentType } from './helpers';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: getContentType(),
});
