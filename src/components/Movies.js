import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  return (
    <>
    <div>
      <h1>Movies Page</h1>
    </div>
    <div>
      Movie title: {props.movie.title}
      Time: {props.movie.time}
      Genres:
      <ul> 
        <li> {props.movie.genres} </li>
      </ul>
    </div>
    </>
  );
};

export default Movies;
