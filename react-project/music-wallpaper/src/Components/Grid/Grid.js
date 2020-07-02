import React from 'react'
import domtoimage from 'dom-to-image'
import { Link } from 'react-router-dom'
import './Grid.css'

const Grid = (props) => {

    let wallpaper = props.albums.map((album, i) => {
            if (i % 3 === 0) {
                return (
                    <div className={`grid-item span-3 grid-item-${i}`}>
                        <img src={`${album}`} 
                            alt={`Album Cover Art ${i}`} 
                        />
                    </div>
                )
            } else if (i % 2 === 0) {
                return (
                    <div className={`grid-item span-2 grid-item-${i}`}>
                    <img src={`${album}`} 
                    alt={`Album Cover Art ${i}`} 
                    />
                    </div>
                )
            } else {
                return (
                    <div className={`grid-item grid-item-${i}`}>
                    <img src={`${album}`} 
                    alt={`Album Cover Art ${i}`} 
                    />
                    </div>
                )
            }
    });

    const handleClick = () => {
        domtoimage.toJpeg(document.getElementById('grid'), { quality: 0.95 })
        .then(dataUrl => {
            let link = document.createElement('a');
            link.download = 'wallpaper.jpeg';
            link.href = dataUrl;
            link.click()
        });
    }

    return (
        <>
        <Link to='/home'> 
            <button className='gridButtonLeft'>Back</button>
        </Link>
        <button className='gridButtonRight' onClick={handleClick}>Download</button>
        <div class="grid-layout" id='grid'>
            {wallpaper}
        </div>
        </>
    )
}

export default Grid