import { useQuery } from '@tanstack/react-query';

import { Article } from '../interfaces';

import { getArticles } from './services';

const useArticleQuery = () => {
  return useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: getArticles,
    meta: {
      errorMessage: 'Failed to fetch articles',
    },
  });
};
export { useArticleQuery };
