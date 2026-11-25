import { useDispatch, useSelector } from "react-redux"
import { selectCards } from "./flashcardsSlice"
import CardComponent from "./Card"
import type { Card } from "./types"
import { useEffect, useState } from "react"
import { flashcardsFetch  } from "./flashcardsSlice"
import type { AppDispatch } from "~/store"
import NavButton from "./NavButton"

export default function Flashcards() {
    const cards = useSelector(selectCards)
    const dispatch = useDispatch<AppDispatch>()
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

    function prevCard() {
        if (currentCardIndex === 0) {
            setCurrentCardIndex(sortedCards.length -1)
        } else {
            setCurrentCardIndex(currentCardIndex - 1)
        }
    }

    type SortCard = Card & { sort: number }

    useEffect(() => {
        dispatch(flashcardsFetch())
    }, [dispatch])
    
    useEffect(() => {
        setSortedCards(cards.map((value: Card) => ({ value, sort: Math.random() }))
                .sort((a: SortCard, b: SortCard) => a.sort - b.sort)
                .map(({ value }: { value: Card }) => value))
    }, [cards])
    
    useEffect(() => {
        setCurrentCard(sortedCards[currentCardIndex])
    }, [currentCardIndex, sortedCards])
    
    return (
        <div className='flex flex-row justify-center items-center h-dvh'>
            <div className='flex flex-col gap-8 w-full lg:w-96'>
                <div className='flex justify-center items-center gap-4 my-4'>
                    <NavButton onClick={prevCard}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </NavButton>
                    <div className='flex w-full justify-center h-full overflow-hidden'>
                    {
                        currentCard 
                        ? <CardComponent key={currentCard.id} question={currentCard.question} answer={currentCard.answer} />
                        : <p>Loading...</p>

                    }
                    </div>
                    <NavButton onClick={nextCard}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </NavButton>
                </div>    
            </div>
        </div>
    )
}