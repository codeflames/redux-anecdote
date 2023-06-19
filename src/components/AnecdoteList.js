import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter})=> {
    // anecdotes.map(anecdote => console.log('content',anecdote.content, 'votes', anecdote.votes))
    const filterText = filter;
    if(filterText === '' || filterText === null || filterText === undefined){
      const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
      return sortedAnecdotes
    }
    else {
     const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterText.toLowerCase()))
      // return filteredAnecdotes.sort((a, b) => b.votes - a.votes)
      const sortedAnecdotes = [...filteredAnecdotes].sort((a, b) => b.votes - a.votes)
      return sortedAnecdotes
    }
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdotes(id))
    dispatch(setNotification(`you voted '${anecdotes.find(a => a.id === id).content}'`))
  }

  return (

    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote?.id)}>vote</button>
        </div>
      </div>
    )
  )


}

export default AnecdoteList