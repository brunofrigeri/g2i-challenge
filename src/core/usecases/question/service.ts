import { Question } from '../../entities/question/domain'
import { QuestionRepository } from '../../entities/question/repository'

export interface QuestionService {
  getQuestions(): Promise<Array<Question>>
}

export class QuestionServiceImpl implements QuestionService {
  questionRepo: QuestionRepository

  constructor(qr: QuestionRepository) {
    this.questionRepo = qr
  }

  async getQuestions(): Promise<Array<Question>> {
    return this.questionRepo.getQuestions()
  }
}
