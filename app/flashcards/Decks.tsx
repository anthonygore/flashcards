import { selectCards } from "./flashcardsSlice"
import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function Decks() {
    const decks = useSelector(selectCards)    
    return(
        <div className='flex flex-col justify-center items-center gap-4 w-full lg:w-96'>
            {decks.map((deck, index) => {
                return <Link key={index} to={{ pathname: `/deck/${index}` }} className='border border-indigo-700 text-indigo-700 h-full w-full p-4 rounded-sm text-center text-xl'>{deck.name}</Link>
            })}
       </div>
    )
}