import React, { Component } from 'react';
import Question from '../component/Question';

const questions = [
  {key: 1, id: 'q1', text: 'Ti piacciono i fiori?'},
  {key: 2, id: 'q2', text: 'Vuoi bene alla mamma?'}
];

class Survey extends Component {

  render(){
    return(
      <div>
        {
          questions.map((question) =>
            <Question
                key={question.key}
                name={question.id}
                text={question.text}
            />
          )
        }
      </div>
    );
  }


}

export default Survey;

