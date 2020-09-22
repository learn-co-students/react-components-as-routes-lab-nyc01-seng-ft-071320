import React from 'react';
import { directors } from '../data';

const renderDirectors = () => {
  return directors.map(d =>
    <div>
      <h2>{d.name}</h2>
      <ul>{d.movies.map(m => <li>{m}</li>)}</ul>
    </div>)
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
