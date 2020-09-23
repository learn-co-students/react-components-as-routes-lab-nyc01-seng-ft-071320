import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(el => 
      <div>
        <p>{el.name}</p>  
        <ul>
          {el.movies.map(el => 
            <li>{el}</li>)}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Actors;
