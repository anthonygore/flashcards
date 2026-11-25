import type { ReactNode } from "react";

export default function NavButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
    return(
        <button className='h-8 w-8 border border-indigo-700 text-indigo-700 rounded-full' onClick={onClick}>
            {children}
        </button>   
    )
}