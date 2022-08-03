import React, { useState } from 'react';
import {useDispatch } from "react-redux"
import {decrement } from "./redux/slice/counter"

const Cart = () => {
     
     const [pro,setProducts]=useState(JSON.parse(localStorage.products))
     const dispatch=useDispatch()
    
     const deleteProduct=(id)=>{
          const cartProducts=pro.filter(x=> x.id !=id)
          localStorage.products=JSON.stringify(cartProducts)
           setProducts(cartProducts)
           dispatch(decrement())
     }
   
     const increment=(item)=>{
       const p=[...pro];
       let ind=p.indexOf(item)
       let s=p[ind]
       if(s.count ==null){s.count=0}
       s.count++

      
       s.price *= s.count
       
       setProducts(p)
     }
     const decre=(item)=>{
      const p=[...pro];
      let ind=p.indexOf(item)
      let s=p[ind]
      if(s.count ==null || s.count ===0){s.count=1}
      else {
        s.count--
        if(s.count != 0){
         let price=s.price
         s.price=price * s.count
      setProducts(p)}
        }
    }


    const CartProducts=()=>{
        return(
            <>
            {pro.map( x=>{
                return (

             <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={x.image}
                        className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">Shirt</h6>
                      <h6 className="text-black mb-0">{x.title}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2" onClick={()=>{decre(x)}}  >
                        <i className="fa fa-minus"></i>
                      </button>

                      <input id="form1"  type="number" 
                        className="form-control form-control-sm text-black  p-0 input-number" value={x.count}  />

                      <button className="btn btn-link px-2" onClick={()=>increment(x)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">$ {x.price}</h6>
                    </div>

                    <div className="col-md-1 text-end row"  >
                      <a  href='#' onClick={()=>deleteProduct(x.id)} className="text-muted mb-2"><i className="fa fa-times"></i></a>
                      <a href="#" className="text-muted"> <input type={'checkbox'}></input> </a>
                    </div>
                    <hr className="my-4"/>

                  </div>
                )
            })}            
            </>
        )
    }



    return ( 
        <>
        <section className="h-100 h-custom" style={{backgroundColor:"#d2c9ff"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{borderRadius:"15px"}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 className="mb-0 text-muted">{pro.length} items</h6>
                  </div>
                  <hr className="my-4"/>

                           
                 <CartProducts  />
                      

             
                </div>
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4"/>

                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">items 3</h5>
                    <h5>$ 132.00</h5>
                  </div>

                  <h5 className="text-uppercase mb-3">Shipping</h5>

                  <div className="mb-4 pb-2">
                    <select className="select">
                      <option value="1">Standard-Delivery- 5.00</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>

                  <h5 className="text-uppercase mb-3">Give code</h5>

                  <div className="mb-5">
                    <div className="form-outline">
                      <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                      <label className="form-label" htmlfor="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr className="my-4"/>

                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>$ 137.00</h5>
                  </div>

                  <button type="button" className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
     );
}
 
export default Cart;
