import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'
import anecdote from '../services/anecdote'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const createAnecdote = async(event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const newAnecdote = await anecdote.createNewAnecdote(content)
    dispatch(addNewAnecdote(newAnecdote))
    dispatch(setNotification(`you created '${content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form
        onSubmit={createAnecdote}
      >
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm