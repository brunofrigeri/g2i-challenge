export interface Question {
  category: string
  type: 'boolean'
  difficulty: 'easy' | 'medium' | 'hard'
  question: string
  correct_answer: string
  incorrect_answers: Array<string>
}
