import React from 'react';
import { movies } from '../data';

const renderMovie = () => {
  return movies.map(mov => 
    <div>
      <h4>{mov.title}</h4>
      <p>Runtime: {mov.time}</p>
      <p>Genres: {mov.genres}</p>
    </div>)
  }


const Movies = () => {
  // console.log(movies)
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovie()}
    </div>
  );
};

export default Movies;
