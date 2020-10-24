import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Question } from '../../../core/entities/question/domain'
import { QuestionRepositoryImpl } from '../../../core/infra/question/repository'
import { QuestionServiceImpl } from '../../../core/usecases/question/service'

const prefix = 'getQuestions'

export type QuestionStore = {
  question: Question[]
}

export interface Store {
  fetching: boolean
  questions: QuestionStore['question']
}

export const initialState: Store = {
  fetching: false,
  questions: [],
}

export const getQuestions = createAsyncThunk(prefix, async () => {
  const repo = new QuestionRepositoryImpl()
  const service = new QuestionServiceImpl(repo)
  const questions = await service.getQuestions()

  return questions
})

export default createSlice({
  name: prefix,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state) => {
      state.fetching = true
    }),
      builder.addCase(getQuestions.rejected, (state) => {
        state.fetching = false
      }),
      builder.addCase(getQuestions.fulfilled, (state, action) => {
        state.fetching = false
        state.questions = action.payload
      })
  },
})
