import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let moviesArray = movies.map(movie => {
    return (
      <div>
        <p>{movie.title}, {movie.time}</p>
        <ul>
    {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1>Movies Page</h1>
        {moviesArray}
    </div>
  );
};


export default Movies;
