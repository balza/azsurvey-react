import { connect } from 'react-redux'
import { removeQuestion } from '../actions'
import QuestionList from './QuestionList'

const mapStateToProps = (state) => ({
 questions : state.questions
})

const mapDispatchToProps = {
  onQuestionClick: removeQuestion
}

const  QuestionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList)

export default QuestionListContainer
