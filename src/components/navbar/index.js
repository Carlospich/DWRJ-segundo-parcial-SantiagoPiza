import React from 'react';
import { useNavigate } from "react-router-dom";
import HomeIcon from './homeIcon';
import './index.css';

const Navbar = ({ setSearchResults, children }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
	console.log("Botón 'Home' clickeado");
	setSearchResults([]); // Limpia los resultados de búsqueda
	navigate(`/`);
  };

  return (
    <div className='navbar-container'>
      <HomeIcon onClick={handleHomeClick} />
      {children}
    </div>
  );
};

export default Navbar;
