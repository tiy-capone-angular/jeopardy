import { ICategory } from "./category";

export interface IAnswer {
  id: number;
  answer: string;
  question: string;
  value: number;
  created_at: string;
  updated_at: string;
  category: ICategory;
}
