import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'
//useEffect, useState, axios, useParams, useNav

const Update = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        //path to your getOne
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log("Update request:", res.data)
            const product = res.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch((err) => console.log(err))
    }, [id]) //dependency array prevents it from constantly making the request - only renders it one time, then stops..monitors any changes to that variable and reruns when it changes but prevents it from reloading otherwise
    const handleSubmit = (e) => {
        //preventDefault keeps component from reloading
        e.preventDefault()
        const putObj = {title, price, description}
        axios.put(`http://localhost:8000/api/product/${id}`, putObj)
        .then((res) => {
            navigate('/')
        .catch(err => console.log('Put request error', err))
        })
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type='number' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type='text' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <button className='btn btn-info' type='submit'>Update Item</button> | <button className='btn btn-info' type='submit'><Link to='/'>Cancel</Link></button>
            </form>
        </div>
    )
}

export default Update