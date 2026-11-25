import { useSelector } from "react-redux"
import { selectCards } from "./flashcardsSlice"
import CardComponent from "./Card"
import type { Card } from "./types"
import { useEffect, useState } from "react"
import NavButton from "./NavButton"
import { Link } from "react-router"

export default function Cards({ deckNum }: { deckNum: number }) {
    const decks = useSelector(selectCards)
    const [deck] = useState(decks[deckNum])
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

    type SortCard = { value: Card; sort: number }

    useEffect(() => {
        setSortedCards(deck.cards.map((value: Card) => ({ value, sort: Math.random() }))
            .sort((a: SortCard, b: SortCard) => a.sort - b.sort)
            .map(({ value }: { value: Card }) => value))
    }, [deck])
    
    useEffect(() => {
        setCurrentCard(sortedCards[currentCardIndex])
    }, [currentCardIndex, sortedCards])
    
    return (
        <div className='flex flex-col gap-4 w-full h-full justify-around items-center'>
            <h2 className='text-2xl text-center'>{deck.name}</h2>
            <div className='flex justify-center items-center gap-4 w-full lg:w-96 h-full'>
                <NavButton onClick={prevCard}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </NavButton>
                <div className='flex w-full justify-center'>
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
             <Link to={{ pathname: '/' }} className=' px-2 py-1 border border-indigo-700 text-indigo-700 rounded-md inline-flex text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <span>Decks</span>
            </Link>
        </div>    
    )
}