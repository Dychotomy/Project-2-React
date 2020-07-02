import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ImageCompiler from '../ImageCompiler/ImageCompiler'
import './SearchBar.css'

const SearchBar = (props) => {
    const [input, setInput] = useState('')
    const handleChange = e => {
        const userInput = e.target.value
        setInput(userInput)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(input)
        setInput('')
    }

    return(
        <div id='searchbar'>
            <form onSubmit={handleSubmit}>
                <input 
                    className='input'
                    type='text'
                    placeholder='Enter artist name'
                    onChange={handleChange}
                    value={input}
                    required
                />
                <button className='searchIcon'>
                    <FontAwesomeIcon icon={faSearch} className='icon'/>
                </button>
            </form>
            <ImageCompiler 
                newMusic={props.newMusic} 
                albums={props.albums} 
                handleSelected={props.handleSelected} 
            />
        </div>
    )
}

export default SearchBar