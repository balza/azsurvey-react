import questions from './questions'

describe('question reducer', () => {
    it('should handle initial state', () => {
      expect(
        questions(undefined, {})
      ).toEqual([])
    })

    it('should handle ADD_QUESTION', () => {
      expect(
        questions([], 
        {
          id: 0,
          type: 'ADD_QUESTION', 
          text:'My Question'
        })
      ).toEqual([
        {
          id : 0, 
          text: 'My Question'
        }
      ]),
      expect(
        questions([
          {
            id: 0,
            text:'My Question 0'
          }
        ],
        { 
          id: 1,
          type: 'ADD_QUESTION',
          text:'My Question 1'
        })
      ).toEqual([
        { 
          id : 0, 
          text: 'My Question 0'
        },
        {
          id : 1,
          text: 'My Question 1'
        }
      ])
    })

    it('should handle REMOVE_QUESTION', () => {
      expect(
        questions([
          {
            id : 0,
            text: 'My Question'
          }
        ], {
          id: 0,
          type: 'REMOVE_QUESTION',
        })
      ).toEqual([]),
      expect(
        questions([
          {
            id : 0,
            text: 'My Question 0'
          },
          {
            id : 1,
            text: 'My Question 1'
          }          
        ], {
          id: 0,
          type: 'REMOVE_QUESTION',
        })
      ).toEqual([
        {
          id : 1,
          text: 'My Question 1'
        }
      ])
    })
  }
)

