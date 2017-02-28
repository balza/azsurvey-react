import React, { PropTypes } from 'react'
import { Button, Glyphicon } from 'react-bootstrap';

const Question = ({ onClick, text }) => (
  <li>
    {text} 
    <Button onClick={onClick}>
      <Glyphicon glyph='glyphicon glyphicon-minus'/>
    </Button>
  </li>
)

Question.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Question
