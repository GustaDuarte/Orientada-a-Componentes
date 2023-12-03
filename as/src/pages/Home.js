import React from 'react';
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link, useParams } from "react-router-dom";
import styles from "./Home.css";

function CustomCard({ imageUrl, buttonText, to }) {
    return (
      <div className="custom-card">
        <img src={imageUrl} alt="Ilustração" className="card-image" />
        <div className="card-content">
          <Link to={to} className="custom-link-button">
            {buttonText}
          </Link>
        </div>
      </div>
    );
  }

function Home(){
    return(
        <div>
            <Header title="Home"/>
            <div className="home-container">
                <h1>Os 20 melhores livros de todos os tempos, segundo este programa de TV</h1>
                <br />
                <p>O Sol é Para Todos, best-seller de Harper Lee, foi considerado o romance mais amado para os 4 milhões de americanos ouvidos pelo programa</p>
                <p>Um programa de televisão americano perguntou a seus telespectadores 
                    quais eram seus livros preferidos de todos os tempos.</p>
                <p>A enquete do The Great American Read, da PBS, ultrapassou 4 milhões de votos. 
                    O Sol é Para Todos, best-seller de Harper Lee que vendeu 40 milhões de cópias no mundo inteiro, 
                    foi adaptado para o cinema, mas nunca conquistou muitos leitores por aqui, foi considerado 
                    o romance mais amado para os americanos ouvidos pelo programa ao longo dos últimos seis meses.</p>
                <p>No levantamento que indicou os 100 livros preferidos dos telespectadores, 
                    volumes de séries citados entraram na lista como uma única obra.</p>
                <p>Por isso esse site contém uma page de livros onde foram inseridos os melhores livros com base em pesquisa como estas, 
                    trazendo descrições, preços catalogados e encontrados na AmazonBooks e autores para ampliar a gama de livros para os usúarios desta página.  </p>
                <div className="flex-container">
                    <div className="text-left-container">
                        <p className="informativo">A o lado você pode ir a página de produtos encontrar ou adicionar um livro preferido ao site atravéz do 
                            botão ou do menu. Obrigado volte sempre!
                        </p>
                    </div>
                <div className="button-container">
                        <CustomCard imageUrl="https://media.istockphoto.com/id/916135450/pt/foto/open-book-on-stack-of-books-on-wooden-table-education-background-back-to-school-free-copy-space.jpg?s=170667a&w=0&k=20&c=EIr_x3Imuvr74240zC1piKRHN8_1F0Q61pTjrUUSUlc=" buttonText="Ir para Produtos" to="/produtos" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home