import React from 'react';
import { actors } from '../data';

const renderactors = () => {
  return actors.map(a =>
    <div>
      <h2>{a.name}</h2>
      <ul>{a.movies.map(m => <li>{m}</li>)}</ul>
    </div>)
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderactors()}
    </div>
  );
};

export default Actors;
