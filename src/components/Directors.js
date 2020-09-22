import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return directors.map(director => {

      const movies = () => director.movies.map(movie => <li>{movie}</li>)

      return (
        <div>
          <h2>Name: {director.name}</h2>
          <p>Movies:</p>
          <ul>{movies()}</ul>
        </div>)
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
