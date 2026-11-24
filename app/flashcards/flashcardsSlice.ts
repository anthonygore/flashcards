import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Card } from "./types";
import type { RootState } from "~/store";
import { marked } from "marked";

interface FlashcardsState {
    cards: Card[]
}

export const flashcardsFetch = createAsyncThunk(
  'flashcards/fetch',
  async () => {
    const response = await fetch('http://localhost:5173/interview-questions.md')
    return await response.text();
  },
)

const initialState: FlashcardsState = {
    cards: [] as Card[]
}

function parseMd(str: string) {
    return str.split('###').map(block => ({ question: marked(block.split('\n')[0]), answer: marked(block.split('\n').slice(1).join('\n'))}) as Card)
}

export const flashcardsSlice = createSlice({
    name: 'flashcards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(flashcardsFetch.fulfilled, (state, action) => {
      state.cards = [...parseMd(action.payload)]
    })
  },
});

export default flashcardsSlice.reducer;

export const selectCards = (state: RootState) => state.flashcards.cards