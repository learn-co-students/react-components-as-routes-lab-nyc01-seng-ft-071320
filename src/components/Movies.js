import React from 'react';
import { movies } from '../data';

const renderMovies = () => {
  return movies.map(m =>
    <div>
      <h2>{m.title}</h2>
      <p>Time: {m.time}</p>
      <ul>{m.genres.map(g => <li>{g}</li>)}</ul>
    </div>)
}

const Movies = () => {

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
