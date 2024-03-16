import { create } from 'zustand';

interface ArticleControlsState {
  search: string;
  onSearch: (search: string) => void;
  show: boolean;
}

export const useArticleControls = create<ArticleControlsState>((set) => ({
  search: '',
  onSearch: (search) => set({ search }),
  show: false,
}));
