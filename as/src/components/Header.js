import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css'; // Certifique-se de ajustar o caminho conforme necessário

function Header({ title }) {
  return (
    <div className="header-container">
      <div className="title-container">
        {title}
      </div>
      <div className="nav-container">
        <nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/produtos">
            Produtos
          </Link>
          <Link className="nav-link" to="/contato">
            Contato 
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;