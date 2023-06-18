

const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'FILTER':
      if (action.payload === '') {
        return ''
      }
      return action.payload
    default:
      return state
  }
  
}

export const filterAnecdotes = (filter) => {
  return {
    type: 'FILTER',
    payload: filter
  }
}

export default filterReducer

