import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import './ImageCompiler.css'

const ImageCompiler = (props) => {  
    let display

    const handleClick = e => {
        props.handleSelected(e.target.src)
    }

    if (props.newMusic === null) {
        display = (<h1 className='music'><FontAwesomeIcon icon={faMusic} className='icon'/></h1>)  
    } else {
        display = props.newMusic.map((album, i) => {
            if (album.strAlbumThumb !== null && album.strAlbumThumb !== '') {
                return (
                    <img className={`albumCovers ${props.albums.includes(album.strAlbumThumb) ? 'albumSelected' : ''}`} 
                        src={`${album.strAlbumThumb}`} 
                        alt={`Album Cover Art ${i}`} 
                        key={i} 
                        onClick={handleClick}
                    />
                )
            }
        });
    }

    return (
        <div className='search-results'>
        {display}
        </div>
    )
}

export default ImageCompiler