import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
           {movies.map((movie, index) => (
             <div key={index}>
                <h1> Name:{movie.title}</h1>
                <p>Time:{movie.time}</p>
                <h1>Genres</h1>
                <ul>
                  {movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
                </ul>
            
        </div>
      ))}
    </div>
  );
};

export default Movies;
