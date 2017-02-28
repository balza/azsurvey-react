let nextQuestionId = 0

export const addQuestion = (text) => ({
  type: 'ADD_QUESTION',
  id: nextQuestionId++,
  text
})

export const removeQuestion = (text) => ({
  type: 'REMOVE_QUESTION',
  id: text
})

