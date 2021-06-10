import { useState, useRef } from 'react'
import './ShortenedLink.css'

const ShortenedLink = ({shortenOutput}) => {
    const [isBtnCopied, setIsBtnCopied] = useState(false)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const btnRef = useRef()
    const origLink = useRef() 
    


    window.addEventListener('resize', () => {
        if(window.innerWidth < 1774) {
            setScreenSize(window.innerWidth)
        }
    })

    const charWidth = () => {
        if(screenSize > 643) {
            return 20
        } else {
            return 11
        }
    }
    const numOfChar =  (screenSize / 100) * 85 / charWidth()
    
    

    const snippet = shortenOutput.originalLink.slice(0, numOfChar)
    
    const copyLink = () => {
        setIsBtnCopied(true)
        navigator.clipboard.writeText(shortenOutput.shortened)
    }

    
    return (
        <div className="result" key={shortenOutput.id}>
            <p ref={origLink} className="result__orig-url">{snippet.length === shortenOutput.originalLink.length ? shortenOutput.originalLink : snippet + '...'}</p>
            <div className="result__shortened-container">
                <p className="result__shortened">{shortenOutput.shortened}</p>
                <button
                onClick={copyLink}
                ref={btnRef}
                className={isBtnCopied ?
                'result__copied result__btn'
                :
                'result__copy result__btn'}>
                    {isBtnCopied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    )
}

export default ShortenedLink
