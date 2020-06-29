import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageCompiler from '../ImageCompiler/ImageCompiler'
import Grid from '../Grid/Grid'
import './App.css';

function App() {
  const [music, setMusic] = useState()
  const [artist, setArtist] = useState('dave matthews band')
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const apiKey = '1'
    const musicUrl = `https://theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${artist}`
    const makeApiCall = async () => {
      const res = await fetch(musicUrl);
      const json = await res.json();
      setMusic(json);
    };
    makeApiCall();
  }, [artist]);


  // const handleSelected = (art) => {
  //   console.log('selected album', art)
  //   const updatedAlbums = [...albums]
  //   const albumIndex = updatedAlbums.indexOf(art)
  //   console.log('Index of album', albumIndex)
  //   if (albumIndex >= 0) {
  //     updatedAlbums.splice(albumIndex, 1)
  //     console.log('removing album')
  //   } else {
  //     updatedAlbums.push(art)
  //     console.log('adding album', art)
  //   }
  //   setAlbums(updatedAlbums)
  // }

  const handleSelected = (art) => {
    const updatedAlbums = [...albums]
    const albumIndex = updatedAlbums.indexOf(art)
      if (albumIndex >= 0) {
        updatedAlbums.splice(albumIndex, 1)
        console.log('removing album')
      }else {
        updatedAlbums.push(art)
        console.log('adding album', art)
        }
    console.log('album after .push()', updatedAlbums)
    setAlbums(updatedAlbums)
  }
  
  const handleSubmit = artist => {
    setArtist(artist)
  }

  let newMusic = [];
    if (music) {
        newMusic = (music.album);
    }

  return (
    <div className="App">
      <h1>Test the data!</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <ImageCompiler newMusic={newMusic} albums={albums} handleSelected={handleSelected} />
      <Grid />
    </div>
  );
}

export default App;
