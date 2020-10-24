import { Question } from './domain'

export interface QuestionRepository {
  getQuestions(): Promise<Array<Question>>
}
