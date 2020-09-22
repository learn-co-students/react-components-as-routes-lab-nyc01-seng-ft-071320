import React from 'react';
import { actors } from '../data';
// import Movies from './Movies';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor => {

      const movies = () => actor.movies.map(movie => <li>{movie}</li>)
      
      return (
        <div>
          <h2>Name: {actor.name}</h2>
          <p>Movies:</p>
          <ul>{movies()}</ul>
        </div>
      )
    })
  }
  
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
