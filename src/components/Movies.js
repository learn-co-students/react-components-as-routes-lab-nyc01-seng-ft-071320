import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map(el => 
        <div>
          <p>Title: {el.title}</p>
          <p>Time: {el.time}</p>
          <p>Genres:</p>
          <ul>
            {el.genres.map(el =>
            <li>{el}</li>
            )}
          </ul>
        </div> 
      )} 
    </div>
  );
};

export default Movies;
