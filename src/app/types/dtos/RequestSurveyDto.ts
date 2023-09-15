import { AnswerDto } from "./AnswerDto";

export interface RequestSurveyDto {
    accessId: string;
    answers: AnswerDto[];
}