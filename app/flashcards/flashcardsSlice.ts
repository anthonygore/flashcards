import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Card } from "./types";
import type { RootState } from "~/store";
import { marked } from "marked";

interface Deck {
    name: string
    cards: Card[]
}

interface FlashcardsState {
    decks: Deck[]
    hasLoaded: boolean
}

export const flashcardsFetch = createAsyncThunk(
  'flashcards/fetch',
  async () => {
    const response = await fetch(`${window.location.origin}/decks.md`)
    return await response.text();
  },
)

const initialState: FlashcardsState = {
    decks: [] as Deck[],
    hasLoaded: false
}

function parseMd(str: string): Deck[] {
    return str.split(/^#\ |\n#\ /).filter((s) => s.length).map((deck) => {
        const cards = deck.split(/\n## /)
        cards.shift()
        return {
            name: deck.split(/\n/)[0],
            cards: cards.map((card) => {
                const c = card.split(/\n/)
                const question = c.shift()
                return {
                    question, 
                    answer: marked(c.join('\n'))
                } as Card
            })
        }
    })
}

export const flashcardsSlice = createSlice({
    name: 'flashcards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(flashcardsFetch.fulfilled, (state, action) => {
      state.decks = [...parseMd(action.payload)]
      state.hasLoaded = true
    })
  },
});

export default flashcardsSlice.reducer;

export const selectCards = (state: RootState) => state.flashcards.decks

export const selectLoaded = (state: RootState) => state.flashcards.hasLoaded