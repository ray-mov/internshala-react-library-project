import { createSlice } from '@reduxjs/toolkit'
import { books } from '../data/book'

const initialState = {
  books: books
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  },
})

export const { addBook } = bookSlice.actions

export default bookSlice.reducer