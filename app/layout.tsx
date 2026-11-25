import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { flashcardsFetch, selectLoaded } from "./flashcards/flashcardsSlice";
import type { AppDispatch } from "./store";
import { useEffect } from "react";

export default function layout() {
    const dispatch = useDispatch<AppDispatch>()
    const hasLoaded = useSelector(selectLoaded)
    
    useEffect(() => {
        dispatch(flashcardsFetch())
    }, [dispatch])
    
    return (
        <div className='h-dvh'>
            <div className='flex flex-row justify-center items-center h-full px-2 py-8 lg:p-8'>
                { hasLoaded ? <Outlet /> : <p>Loading...</p>}
            </div>
        </div>
    )
}