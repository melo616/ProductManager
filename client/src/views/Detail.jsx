import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const Detail = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // console.log("Id: ",{id})
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => setProduct(res.data))
        .catch(err =>console.log('This is our detail page: ', err))
    }, [id])

    const handleDelete = (e, id) => {
        if (window.confirm(`Are you sure you want to delete ${product.title}?`)) {
            axios.delete(`http://localhost:8000/api/product/${id}`)
                .then((res) => {
                    navigate('/')
                })
                .catch((res) => console.log("Bye"))
        }
    }

    // console.log("Product",product)
    return (
        <div className='text-center'>
            <h1>Product Details</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p><button className='btn btn-outline-primary'><Link to={'/'}>Home</Link></button></p>
            <button onClick = {(e)=>{handleDelete(e, product._id)}}>Delete</button>
        </div>
    )
}

export default Detail