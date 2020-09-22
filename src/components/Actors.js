import React from 'react';
import { actors } from '../data';


const renderActor = () => {
  return actors.map(act => 
    <div>
      <h4>{act.name}</h4>
      <p>{act.movies}</p>
    </div>)
}

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActor()}
    </div>
  );
};

export default Actors;
