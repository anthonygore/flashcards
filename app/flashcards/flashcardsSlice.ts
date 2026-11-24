import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Card } from "./types";
import type { RootState } from "~/store";

interface FlashcardsState {
    cards: Card[]
}

export const flashcardsFetch = createAsyncThunk(
  'flashcards/fetch',
  async (userId: number) => {
    const response = fetch('./interview-questions.md')
    console.log(response);
    return response.data
  },
)

const initialState: FlashcardsState = {
    cards: []
}

export const flashcardsSlice = createSlice({
    name: 'flashcards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(flashcardsFetch.fulfilled, (state, action) => {
      console.log(action)
      state.flashcards.cards.push(action.payload)
    })
  },
});

export default flashcardsSlice.reducer;

export const selectCards = (state: RootState) => state.flashcards.cards