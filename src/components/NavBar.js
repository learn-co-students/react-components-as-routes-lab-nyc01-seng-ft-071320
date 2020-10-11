import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>

      <NavLink to="/" exact style={link} activeStyle={{ background: 'red'}}>Home</NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={{ background: 'orange'}}>Movies</NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={{ background: 'yellow'}}>directors</NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={{ background: 'green'}}>actors</NavLink>

    </div>
  );
};

export default NavBar;
