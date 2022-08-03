import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {


    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(id)
    useEffect(() => {
      const getProduct = async () => {
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
    console.log(id)
    const ShowProduct = () => {
      return (
        <>
          <div className="col-md-6">
                <img src={product.image} height="400px" width="400px"/>
          </div>
          <div className="col-md-6">
              <p>{product.category}</p>
          </div>
        </>
      );
    };







    return ( 
        <>
      <div className="container">
        <div className="row justify-content-center my-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
     );
}
 
export default Test;