import React, { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {useDispatch } from "react-redux"
import {increment } from "./redux/slice/counter"


const Product = () => {
 
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch()
  const [mdisabled,setdisabled]=useState(false)
  

  useEffect(() => {
     const getProduct = async () => {
       const cartProducts=JSON.parse(localStorage.products)
       cartProducts.map(e=>{  if(e.id === parseInt(id)){ setdisabled(true)}   })
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  
  const Loading = () => {
    return (
      <>
        Loading....
      </>
    );
  };
  

  const addProduct=(product)=>{
      const  products=(localStorage.products != null)? JSON.parse(localStorage.products):[]
      products.push(product)
      localStorage.products=JSON.stringify(products)
      dispatch(increment())
      setdisabled(true)
      
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
              <img style={{objectFit:"contain"}} src={product.image} height="400px" width="400px"/>
        </div>
         <div className="col-md-6">
            <h4 className="text-uppercase text-black-50 ">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p c  lassName="lead">Rating {product.rating && product.rating.rate}
             <i className="fa fa-star"> </i> <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>  <i className="fa fa-star"></i> 
             </p>
             <h3 className="display-6 fw-bolder my-4"> $ {product.price}</h3>
             <p className="lead">{product.description}...<a href="#">show more</a></p>
             <button className="btn btn-outline-dark  me-2">Bay Now</button>
             <button className="btn  btn-dark" onClick={()=>addProduct(product)} disabled={mdisabled}>Add to cart </button>

        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5 py-5" >
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default Product;
