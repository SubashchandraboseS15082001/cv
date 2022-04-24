import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

/* line 13 has entire data link */

export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(0);
    let componentMounted = true;

    const state = useSelector((state)=> state.handleCart)


    useEffect(() => {
console.log("The state  valye", state)
    }, [state])

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }

        }
        getProducts();
    },
        []);


    const Loading = () => {
        return (
            <>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
            </>
        );
    };
    const filterProduct = (cat, id) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList)
        setSelected(id)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className={`btn me-4 ${selected===0?'btn-dark':' btn-outline-dark'}`} onClick={() => {
                setFilter(data);
                setSelected(0);
                }}>
                        All
                    </button>
                    <button className={`btn me-4 ${selected===1?'btn-dark':' btn-outline-dark'}`} onClick={() => filterProduct("men's clothing", 1)}>
                        Men's Clothing
                    </button>
                    <button className={`btn me-4 ${selected===2?'btn-dark':' btn-outline-dark'}`} onClick={() => filterProduct("women's clothing", 2)}>
                        Women's Clothing
                    </button>
                    <button className={`btn me-4 ${selected===3?'btn-dark':' btn-outline-dark'}`} onClick={() => filterProduct("jewelery", 3)}>
                        Jwelery
                    </button>
                    <button className={`btn me-4 ${selected===4?'btn-dark':' btn-outline-dark'}`} onClick={() => filterProduct("electronics", 4)}>
                        Electronic
                    </button>
                </div>
            
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-5">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px;"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                }
                )}
            </>
        )

    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}
