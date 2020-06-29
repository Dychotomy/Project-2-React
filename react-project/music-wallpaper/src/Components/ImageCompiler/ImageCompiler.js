import React from 'react'
import './ImageCompiler.css'

const ImageCompiler = (props) => {
    let display
    const handleClick = e => {
        e.preventDefault()
        props.handleSelected([e.target.src])
        console.log(props.albums)
    }

    if (props.newMusic === []) {
        display = (<h1>Artist not found</h1>)  
    } else {
    display = props.newMusic.map(album => {
        return (
            <img className='albumCovers' src={`${album.strAlbumThumb}`} alt="" onClick={handleClick}/>
        )
    });
    }
    return (
        <div className='search-results'>
        {display}
      </div>
    )
}

export default ImageCompiler