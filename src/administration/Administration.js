import React, { Component } from 'react';
import AddQuestion from './AddQuestion';
import QuestionListContainer from './QuestionListContainer';

class Administration extends Component {
  render(){
    return(
      <div>
        Administration
        <AddQuestion />
        <QuestionListContainer />
      </div>
    );
  }


}

export default Administration;

