import React, { PropTypes } from 'react'
import { Glyphicon } from 'react-bootstrap';

const Question = ({ onClick, text }) => (
  <li>
    {text} <Glyphicon glyph='glyphicon-minus' onClick='onClick' /> 
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Question
