import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import Product from "./product";

const Products = () => {
  const [date, setDate] = useState([]);
  const [filter, setFilter] = useState(date);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setDate(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);



   
  const Loading = () => {
    return <>Loading....</>;
  }; //end loading

  const filterProduct = (cat) => {
    const updatedList = date.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5 mt-5  ">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(date)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (          
            <>
              <div className="col-md-3 mb-3">
                <div class="card h-100 text-center" key={product.id}>
                  <img
                    src={product.image}
                    style={{ objectFit: "contain" }}
                    height="250px"
                    class="card-img-top"
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{product.title.substring(0, 15)}</h5>
                    <p class="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark m-0 "
                    >
                      Bay
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center ">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
