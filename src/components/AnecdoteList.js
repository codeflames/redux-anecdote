import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdotes } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter})=> {
    if(filter === '' || filter === null){
      return anecdotes.sort((a, b) => b.votes - a.votes)
    }
    else {
     const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      return filteredAnecdotes.sort((a, b) => b.votes - a.votes)
    }
    // return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => b.votes - a.votes)
  })
    // state.anecdotes.sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdotes(id))
  }

  return (

    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )
  )


}

export default AnecdoteList