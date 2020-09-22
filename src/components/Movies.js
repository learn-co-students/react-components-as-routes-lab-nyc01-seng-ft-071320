import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map(movie => {
      const genres = () => movie.genres.map(genre => <li>{genre}</li>)
      return (
        <div>
          <h2>{movie.title}</h2>
          <p>Movie Run Time: {movie.time}</p>
          <ul>
            {genres()}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
