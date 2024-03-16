import { instance } from '@/lib/api/interceptor';

import { Article } from '../interfaces';

export const getArticles = async () => {
  const response = await instance.get<Article[]>('/articles');
  return response.data;
};
