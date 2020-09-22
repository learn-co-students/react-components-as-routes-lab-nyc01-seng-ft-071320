import React from 'react';
import { directors } from '../data';

const renderDirector = () => {
  return directors.map(dir => 
    <div>
      <h4>{dir.name}</h4>
      <p>{dir.movies}</p>
    </div>)
}

const Directors = () => {
  // console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirector()}
    </div>
  );
}

export default Directors
