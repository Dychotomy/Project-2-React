import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
    const [input, setInput] = useState('')
    const handleChange = e => {
        console.log('handleChange', e.target.value)
        const userInput = e.target.value
        setInput(userInput)
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log('handleSubmit clicked')
        props.handleSubmit(input)
        setInput('')
    }
    return(
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Enter artist name'
                    onChange={handleChange}
                    value={input}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar