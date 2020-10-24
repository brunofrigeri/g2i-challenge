import { Store } from './slice'

export const isLoading = (state: Store) => state.fetching

export const getQuestions = (state: Store) => state.questions
