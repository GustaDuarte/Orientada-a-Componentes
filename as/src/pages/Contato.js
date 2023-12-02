import Header from "../components/Header"
import ImgMarmore from '../assets/images/marmore.png';
import Formulario from "../components/Formulario";
import styles from './Contato.css'
import Footer from "../components/Footer";

function Contato(){
    return(
        <div>
            <Header title="Contato"/>
            <div className="container-contato">
                <img className="background-img" src={ImgMarmore} alt="img-fundo-marmore"></img>
                <Formulario/>
            </div>
            <Footer />
        </div>  
    )
}

export default Contato