import React, {useState} from 'react'
import './LinkShortener.css'
const LinkShortener = ({shortenHandler, error, setError, loading}) => {
    const [shortenerInput, setShortenerInput] = useState('')
    

    const inputHandler = (e) => {
        const inputVal = e.target.value
        setShortenerInput(inputVal)        
    }


    const submitiHandler = () => {
        // eslint-disable-next-line 
        const regex = /[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,7}/;
        if(shortenerInput === '') {
            setError('Please add a link')
            return;
        }
        if(!regex.test(shortenerInput)) {
            setError('Please enter a valid link')
            return;
        }
        if(error) {setError(null)}
        
        shortenHandler(shortenerInput)
    }
    return (
        <div className="shortener">
            <div className="shortener__input-container">
                <input 
                className={error ? 'shortener__input error' : 'shortener__input'}
                onChange={inputHandler}
                type="text" value={shortenerInput} 
                placeholder="Shorten a link here..."
                />
                {error && <i className="error__msg">{error}</i>}
                <button 
                className={loading ? "shortener__btn loading" : "shortener__btn"} 
                onClick={submitiHandler} disabled={loading ? true : false}>
                    {loading ? 'Shortening' : 'Shorten It!'}
                </button>
            </div>
        </div>
    )
}

export default LinkShortener
