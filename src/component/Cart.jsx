import React from 'react'

export default function Cart() {
  return (
    <div>
        <div className="container mb-5">
                <h1 className='mb-5 text-center'>CART</h1>
                <div className="card bg-dark text-white border-0">
                    <img src="/images/login.jpg" class="card-img" alt="Background Image" height="650px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder text-dark mb-0">HERE IS YOUR PRODUCTS</h5>
                    <i className="card-text lead text-dark fw-5 fs-2">CHECKOUT ALL YOUR PRODUCTS</i>
                    </div> 
                </div>
                </div>
            </div>
            
    </div>
  )
}
