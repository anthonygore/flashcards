export default function NavButton({ onClick, children }) {
    return(
        <button className='h-8 w-8 border border-indigo-700 text-indigo-700 rounded-full' onClick={onClick}>
            {children}
        </button>   
    )
}