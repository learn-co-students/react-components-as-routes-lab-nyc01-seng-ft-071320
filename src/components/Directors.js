import React from "react";
import { directors } from "../data";

const Directors = () => {
  function renderDirectors() {
    return directors.map((actor) => (
      <div key={actor.name} className="actor">
        {actor.name}
        <ul>
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ));
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
};

export default Directors;
