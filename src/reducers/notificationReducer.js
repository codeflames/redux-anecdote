import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification: (state, action) => {
      const notification = action.payload
      return notification

    },

    // eslint-disable-next-line no-unused-vars
    removeNotification: (state, action) => {
      return ''
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions

export default notificationSlice.reducer