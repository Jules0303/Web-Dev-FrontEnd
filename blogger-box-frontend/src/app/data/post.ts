import { Category } from './category';

export interface Post {
  id: string;
  name: string;
  description: string;
  date: string;
  category: Category;
}

