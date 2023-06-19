import { useSelector, useDispatch } from 'react-redux'
import { removeNotification } from '../reducers/notificationReducer'


const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  // notification timeout

  setTimeout(() => {
    dispatch(removeNotification())
  }, 5000)


  const style = {
    border: 'solid',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    display: notification === '' ? 'none' : ''
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification