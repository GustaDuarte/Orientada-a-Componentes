import ImgCadeira from '../assets/images/cadeira.png';
import styles from './CardProdutos.css'

function CardProdutos(){
    return(
        <div className="card-produtos">
                <img src={ImgCadeira} alt="imagem-cadeira"></img>
                <div className="descricao-produtos">
                <h2>Cadeira</h2>
                <h3>R$199,90</h3>
                </div>
        </div>
    )
}

export default CardProdutos