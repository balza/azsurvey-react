const question = (state, action) => {
}

const questions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default questions
