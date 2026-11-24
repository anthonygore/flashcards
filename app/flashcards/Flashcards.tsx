import { useDispatch, useSelector } from "react-redux"
import { selectCards } from "./flashcardsSlice"
import CardComponent from "./Card"
import type { Card } from "./types"
import { useEffect, useState } from "react"
import { flashcardsFetch  } from "./flashcardsSlice"
import type { AppDispatch } from "~/store"

export default function Flashcards() {
    const cards = useSelector(selectCards)
    const dispatch = useDispatch<AppDispatch>()
    dispatch(flashcardsFetch())
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [currentCard, setCurrentCard] = useState<Card | null>(null)
    const [sortedCards, setSortedCards] = useState<Card[]>([])
    
    function nextCard() {
        if (currentCardIndex === sortedCards.length -1) {
            setCurrentCardIndex(0)
        } else {
            setCurrentCardIndex(currentCardIndex + 1)
        }
    }

    type SortCard = Card & { sort: number }
    
    useEffect(() => {
        setSortedCards(cards.map((value: Card) => ({ value, sort: Math.random() }))
                .sort((a: SortCard, b: SortCard) => a.sort - b.sort)
                .map(({ value }: { value: Card }) => value))
    }, [cards])
    
    useEffect(() => {
        setCurrentCard(sortedCards[currentCardIndex])
    }, [currentCardIndex, sortedCards])
    
    return (
        <div className='flex flex-col gap-8 p-12'>
            <div className='flex justify-center'>
                <button className='px-4 py-2 border border-indigo-700 text-indigo-700 rounded-md' onClick={nextCard}>Next</button>
            </div>
            <div className='flex w-full justify-center'>
            {
                currentCard 
                ? <CardComponent key={currentCard.id} question={currentCard.question} answer={currentCard.answer} />
                : <p>Loading...</p>

            }
            </div>
            
        </div>
    )
}