import React from 'react'
import domtoimage from 'dom-to-image'
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

    // let wallpaper = props.albums.map((album, i) => {
    //     return (
    //         <img src={`${album}`} alt={`Album Cover Art ${i}`} />
    //     )
    // })
    
    // const wallpaperGrid = (props.albums) => {
    //     for (i = 0; i < props.albums.length; i++) {
    //         if (i %= 2 === 0) {
    //             <img src={`${album}`} 
    //             alt={`Album Cover Art ${i}`} 
    //             className={`grid-item span-2 grid-item-${i}`}
    //             />
    //         } else if (i %= 3 === 0) {
    //             <img src={`${album}`} 
    //             alt={`Album Cover Art ${i}`} 
    //             className={`grid-item span-3 grid-item-${i}`}
    //             />
    //         } else {
    //             <img src={`${album}`} 
    //             alt={`Album Cover Art ${i}`} 
    //             className={`grid-item grid-item-${i}`}
    //             />
    //         }
    //     } 
    // }
    
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
        <button onClick={handleClick}>Scaffold</button>
        <div class="grid-layout" id='grid'>
            {wallpaper}
        </div>
        </>
    )
}

export default Grid