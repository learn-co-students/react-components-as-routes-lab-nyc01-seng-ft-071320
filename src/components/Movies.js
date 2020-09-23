import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div><h3>Movie: {movie.title}<br/>Time: {movie.time}<br/>Genre:<ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul></h3></div>)}
    </div>
  );
};

export default Movies;
