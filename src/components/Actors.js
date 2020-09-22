import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor => {
    const movies = () => actor.movies.map(movie => <li>{movie}</li>)
      return (
        <div>
          <h1>{actor.name}</h1>
          <ul>
            {movies()}
          </ul>
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
