import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    voteAnecdotes: (state, action) => {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }

      return state.map(a => a.id !== id ? a : changedAnecdote)
    }
    ,
    addNewAnecdote: (state, action) => {
      const content = action.payload
      return [...state, content]
    },

    setAnecdotes: (state, action) => {
      return action.payload
    }
  }
})

export const { voteAnecdotes, addNewAnecdote, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer