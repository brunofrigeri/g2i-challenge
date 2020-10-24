import { combineReducers } from '@reduxjs/toolkit'

import getQuestions, {
  initialState as getQuestionsInitalState,
  Store as GetQuestionsState,
} from './question'

export interface State {
  getQuestions: GetQuestionsState
}

export const initialState: State = {
  getQuestions: getQuestionsInitalState,
}

export default combineReducers<State>({
  getQuestions,
})
