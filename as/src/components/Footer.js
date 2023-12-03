// Footer.js
import React from 'react';
import styles from './Footer.css';

function Footer({ isProductPage }) {
  return (
    <div className={`footer ${isProductPage ? 'produtoSobre-footer' : ''}`}>
      <div>
        <h3>Ulbra Campus Torres</h3>
      </div>
      <p className="description">Trabalho AS / Programação Orientada a Componentes</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/gustavo-duarte-225007219/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6daj4CN6qpihkDq_L-CATcJgjQYMoZpD6Pw&usqp=CAU" alt="Linkedin" />
        </a>
        <a href="https://twitter.com/duartegustavo7">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslXhG0P-zi6oZdrEpQAVA5OQfJbJntvMOqQ&usqp=CAU" alt="X" />
        </a>
        <a href="https://www.instagram.com/duartegustavo7/">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
