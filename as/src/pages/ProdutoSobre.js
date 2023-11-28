import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {ProductContext} from "../contexts/productContext"

function ProdutoSobre(){
    const parms = useParams()
    const [data, setData] = useState([])
    const productContext = useContext(ProductContext)

    useEffect(()=>{
        
        // const fetchProducts = async() =>{
        // const result  = await fetch("http://localhost:3001/products")
        // const products = await result.json()

         const produtoClicado = productContext.products.filter((product)=> product.id == parms.id)

         setData(produtoClicado[0])
        // }
        // fetchProducts()
        
    }, [])

    return(
        <>
        {data &&
            <div>
                <h1>Sobre o produto {data.id} - {data.name} - {data.price}</h1>
                <h1>{data.description}</h1>
                <Link to="/">Home</Link>
            </div>
        }
        </>
    )
}

export default ProdutoSobre;