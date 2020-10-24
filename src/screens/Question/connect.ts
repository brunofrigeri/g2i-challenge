import { connect } from 'react-redux'
import * as questions from '../../store/usecases/getQuestions'
import { store, Store } from '../../store'
import { QuestionStore } from '../../store/usecases/getQuestions'
import { bindActionCreators } from 'redux'

export interface ConnectedProps {
  questions: QuestionStore['question']
  fetching: boolean
  fetchQuestions: typeof questions.getQuestions
}

const mapStateToProps = (state: Store, props: ConnectedProps) => ({
  fetching: questions.selectors.isLoading(state.getQuestions),
  questions: questions.selectors.getQuestions(state.getQuestions),
})

const mapDispatchToProps = (
  dispatch: typeof store.dispatch,
  props: ConnectedProps
) => ({
  ...bindActionCreators(
    {
      fetchQuestions: questions.getQuestions,
    },
    dispatch
  ),
})

export const connected = connect(mapStateToProps, mapDispatchToProps)
