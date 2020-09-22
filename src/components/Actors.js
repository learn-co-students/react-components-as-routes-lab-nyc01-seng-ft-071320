import React from "react";
import { actors } from "../data";

const Actors = () => {
  function renderActors() {
    return actors.map((director) => (
      <div key={director.name} className="director">
        {director.name}
        <ul>
          {director.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ));
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
