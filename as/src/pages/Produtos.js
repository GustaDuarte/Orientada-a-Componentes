import { useContext, useEffect, useState } from "react"
import CardProdutos from "../components/CardProdutos"
import Header from "../components/Header"
import styles from "./Produtos.css"
import { useNavigate } from "react-router-dom"
import {ProductContext} from "../contexts/productContext"
import useFetch from "../hooks/useFetch"


function Produtos(){

    //const [products, setProducts] = useState();
    
    const [data, request] = useFetch("http://localhost:3001/products")
    const productContext = useContext(ProductContext)
    productContext.setProduct(data)

    const navigate = useNavigate()

    useEffect(()=>{

        request()
        // const fetchProducts = async() =>{
        // const result  = await fetch("http://localhost:3001/products") 
        // const products = await result.json()
        // setData(products)
        // productContext.setProducts(products)
        // }
        // fetchProducts()
        
    }, [request])

    function handleClick(id){
        navigate(`${id}`)
    }


    return(
        <div>
            <Header/>
            <h1>Produtos</h1>

            {data && data.map((product) =>{
                return <div onClick={() => handleClick(product.id)} style={{width:"50%", backgroundColor: "red", height:120, marginTop: 40, marginBottom: 40}}> 
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
                {/* <img style={{width: 200, height: 200}} src={product.photo_url} alt=""/> */}
                </div>
            })}

        </div>
    )
}

export default Produtos