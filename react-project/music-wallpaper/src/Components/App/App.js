import React, { useState, useEffect } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'

import Grid from '../Grid/Grid'
import './App.css';

function App() {
  const [music, setMusic] = useState()
  const [artist, setArtist] = useState('')
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const apiKey = `1`
    const musicUrl = `https://theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${artist}`
    const makeApiCall = async () => {
      const res = await fetch(musicUrl);
      const json = await res.json();
      setMusic(json);
    };
    makeApiCall();
  }, [artist]);

  const handleSelected = (art) => {
    const updatedAlbums = [...albums]
    const albumIndex = updatedAlbums.indexOf(art)
      if (albumIndex >= 0) {
        updatedAlbums.splice(albumIndex, 1)
      }else {
        updatedAlbums.push(art)
      }
    setAlbums(updatedAlbums)
  }
  
  const handleSubmit = artist => {
    setArtist(artist)
  }

  let newMusic = [];
    if (music) {
        newMusic = music.album
    }

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path='/home'
        render={routerProps => <SearchBar{...routerProps}
        handleSubmit={handleSubmit}
        handleSelected={handleSelected}
        newMusic={newMusic}
        albums={albums}/>}
      />
      <Route path='/grid'
        render={routerProps => <Grid{...routerProps}
        albums={albums}/>}
      />
      <Route path="*" render={() => <Redirect to='/home' />} />
      </Switch>
    </div>
  );
}

export default App;
