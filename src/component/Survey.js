import React, { Component } from 'react';
import Question from '../component/Question';

const questions = [
  {id: 'q1', text: 'Ti piacciono i fiori?'},
  {id: 'q2', text: 'Vuoi bene alla mamma?'}
];

class Survey extends Component {

  render(){
    return(
      <div>
        {
          questions.map((question) =>
            <Question
                id={question.id}
                text={question.text}
            />
          )
        }
      </div>
    );
  }


}

export default Survey;

