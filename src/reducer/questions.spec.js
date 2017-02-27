import questions from './questions'

describe('question reducer', () => {
    it('should handle initial state', () => {
      expect(
        questions(undefined, {})
      ).toEqual([])
    })
  }
)

