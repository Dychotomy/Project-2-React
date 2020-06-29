import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './App.css';

function App() {
  const [music, setMusic] = useState()
  const [artist, setArtist] = useState('dave matthews band')

  useEffect(() => {
    const apiKey = '1'
    const musicUrl = `https://theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${artist}`
    const makeApiCall = async () => {
      const res = await fetch(musicUrl);
      const json = await res.json();
      setMusic(json);
      console.log("within App.js -", json);
    };
    makeApiCall();
  }, [artist]);
  
  let newMusic = [];
  if (music) {
    newMusic = music.album;
  }
  let display = newMusic.map(album => {
    return <img src={`${album.strAlbumThumb}`} alt="" />;
  });

  const handleSubmit = artist => {
    setArtist(artist)
  }

  return (
    <div className="App">
      <h1>Test the data!</h1>
      <SearchBar handleSubmit={handleSubmit} />
      {display}
    </div>
  );
}

export default App;
