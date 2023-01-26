import React, {useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
    
const ProductList = (props) => {
    console.log("Props: ",props)

    const {removeFromDom} = props;

    const handleDelete = (e, product) => {
        console.log("Deleting: ", product)
        if (window.confirm(`Are you sure you want to delete ${product.title}?`)) { 
            axios.delete('http://localhost:8000/api/product/' + product._id)
            .then((res) => {
                removeFromDom(product._id)
            })
            .catch((err) => console.log(err))
        }}

    return (
        <div>
            <h2>All Products</h2>
            {
            props.products.map( (product, i) => {
                return (
                <p key={i}><Link to={`/detail/${product._id}`}>{product.title}</Link> | <Link to={`/edit/${product._id}`}>Edit</Link> | <button onClick ={(e)=>{handleDelete(e, product)}}>Delete</button></p>
                )
            })
            }
        </div>
    )
}

export default ProductList;