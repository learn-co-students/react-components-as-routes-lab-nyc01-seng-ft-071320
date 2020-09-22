import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map(movie => {

        const renderGenres = () => {
          return movie.genres.map(genre => <li>{genre}</li>)
        }

        return(
          <div>
            <h4>{movie.title}</h4>
            <h5>{movie.time} minutes</h5>
            <h5>Genres</h5>
            <ul>
              {renderGenres()}
            </ul>
          </div>)
        
      }
    )
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
