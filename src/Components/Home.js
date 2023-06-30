import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/actions/productAction";

const Home = () => {
 const {loading, products, error} = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    return(
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",

        }}>
             {
                products.length>0 &&(
                    
                        products.map(product =>(
                             <div key={product.id}
                             style={{
                                    width: "300px",
                                    border: "1px solid black",
                                    margin: "10px",
                             }}
                             >
                                <img 
                                style={{
                                    width: "100%",
                                }}
                                src={product.thumbnail} alt={product.title} />
                                <h2>{product.title}</h2>
                               <h3> {product.brand}</h3>
                                <p>{product.description}</p>
                                <h3>{product.price}</h3>

                                <button>Add to Cart</button>

                             </div>
                                
                                )
                             )
                    
                )
             }
        </div>
    )
}
export default Home;