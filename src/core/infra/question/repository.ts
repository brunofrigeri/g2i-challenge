import api from '../../../services/api'
import { Question } from '../../entities/question/domain'
import { QuestionRepository } from '../../entities/question/repository'

export class QuestionRepositoryImpl implements QuestionRepository {
  async getQuestions(): Promise<Array<Question>> {
    const response = await api.get('?amount=10&difficulty=hard&type=boolean')

    return response.data.results.map((result: Question) => result)
  }
}
