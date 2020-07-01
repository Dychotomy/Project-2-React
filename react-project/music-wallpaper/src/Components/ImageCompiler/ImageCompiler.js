import React from 'react'
import './ImageCompiler.css'

const ImageCompiler = (props) => {  
    let display

    const handleClick = e => {
        props.handleSelected(e.target.src)
    }

    if (props.newMusic === null) {
        display = (<h1>Artist not found</h1>)  
    } else {
        if (props.newMusic.strAlbumThumb !== null && props.newMusic.strAlbumThumb !== '') {
        display = props.newMusic.map((album, i) => 
            (
                <img className={`albumCovers ${props.albums.includes(album.strAlbumThumb) ? 'albumSelected' : ''}`} 
                    src={`${album.strAlbumThumb}`} 
                    alt={`Album Cover Art ${i}`} 
                    key={i} 
                    onClick={handleClick}
                />
            )
            
            );
        }
    }

    return (
        <div className='search-results'>
        {display}
        </div>
    )
}

export default ImageCompiler