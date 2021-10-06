import React, { useEffect, useState } from 'react';
import products from '../../server/data.json';
import ProductCard from './product-card/ProductCard';
import './Products.css';
import Axios from 'axios';

export default function Products({ onUpdateCart }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/products').then(response=>{
            setProducts(response.data);
        }).catch(error=>{
            //we can update state to an error to show meaningful message on screen
         });
    }, [])
    return (
        <div className="row">
            {
                products.map((item) => {
                    return <ProductCard item={item} onAddToCart={onUpdateCart} key={item.name} />
                })
            }
        </div>
    )
}
