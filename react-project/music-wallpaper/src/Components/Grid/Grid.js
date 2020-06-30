import React from 'react'
import Masonry from 'react-masonry-css'
import './Grid.css'

const Grid = (props) => {
    console.log(props.albums)
    const breakpointColumnsObj = {
        default: 2,
        1100: 4,
        700: 3,
        500: 3
      };
    let wallpaper = props.albums.map((album, i) => {
        return (
            <img src={`${album}`} alt={`Album Cover Art ${i}`} />
        )
    });

    // const normalizedAlbums = (arr) => {
    //     if(props.arr){
    //     let newArray = props.arr}
    //     return newArray
    // }

    // console.log(normalizedAlbums(props.albums))

    return (
        <>
        <div>Scaffold</div>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {wallpaper}    
            {/* {<img src={props.albums[0]} alt='' />}
            {<img src={props.albums[1]} alt='' />}
            {<img src={props.albums[2]} alt='' />}
            {<img src={props.albums[3]} alt='' />} */}
        </Masonry>
        </>
    )
}

export default Grid