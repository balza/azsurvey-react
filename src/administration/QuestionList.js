import React, { PropTypes } from 'react'
import Question from './Question'

const QuestionList = ({ questions, onQuestionClick }) => (
  <ul>
    {questions.map(question =>
      <Question
        key={question.id}
        {...question}
        onClick={() => onQuestionClick(question.id)}
      />
    )}
  </ul>
)

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onQuestionClick: PropTypes.func.isRequired
}

export default QuestionList
