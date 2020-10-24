import { combineReducers } from '@reduxjs/toolkit'

import getQuestions, {
  initialState as getQuestionsInitalState,
  Store as GetQuestionsState,
} from './usecases/getQuestions'

export interface Store {
  getQuestions: GetQuestionsState
}

export const initialState: Store = {
  getQuestions: getQuestionsInitalState,
}

export default combineReducers<Store>({
  getQuestions,
})
