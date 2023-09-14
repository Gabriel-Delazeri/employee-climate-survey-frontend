import { Access } from './Access';
import { Question } from './Question';

export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  access_list: Access[];
}
