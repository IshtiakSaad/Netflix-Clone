import './App.css';
import React from 'react';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">

      <Nav />
      <Banner />

      <Row 
        title="NETFLIX Originals" 
        fetchURL = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL = {requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL = {requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL = {requests.fetchActionMovies}/>
      <Row title="Commedy Movies" fetchURL = {requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL = {requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL = {requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
