const question = (state, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':      
      return {
        id : action.id,
        text: action.text
      }
    default:
      return state
  }
}

const questions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        question(undefined, action)
      ]
    case 'REMOVE_QUESTION':
//      console.log("action.id " +  action.id + "\nquestions:" + questions);
      return state.filter(questions => questions.id !== action.id);        
    default:
      return state
  }
}

export default questions
