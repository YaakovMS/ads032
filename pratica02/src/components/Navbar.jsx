import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <ul>
      <li>
        <NavLink exact to="/" activeclassname="active">
          Meus Contatos
        </NavLink>
      </li>
      <li>
        <NavLink to="/novo" activeclassname="active">
          Novo Contato
        </NavLink>
      </li>
    </ul>
  );
}


