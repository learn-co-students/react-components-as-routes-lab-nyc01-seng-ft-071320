import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor => {

      const renderActorMovies = () => {
        return actor.movies.map(movie => <li>{movie}</li>)
      }

      return(
        <div>
          <h2>{actor.name}</h2>
          <h4>Movies</h4>
          <ul>
            {renderActorMovies()}
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
