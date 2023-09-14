import { Category } from "./Category";
import { Option } from "./Option";
import { QuestionType } from "./QuestionType";

export interface Question {
  id: string;
  content: string;
  category: Category;
  type: QuestionType;
  options: Option[];
}
