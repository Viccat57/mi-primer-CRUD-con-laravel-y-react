import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {
  const [ products, setProducts ] = useState( [] )

  useEffect ( ()=> {
      getAllProducts()
  }, [])

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`)
    setProducts(response.data)
    console.log(response.data)
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`)
    getAllProducts()
  }
  return (
    <div>
        <div className='display-1 fw-bold'>Bienvendo a Papeleria Buen Papel</div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-outline-success btn-lg mt-2 mb-2'>Create</Link>
        </div>

        <table className='table table-striped table-dark'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { products.map( (product) => (
                    <tr key={product.id}>
                        <td> {product.descripcion} </td>    
                        <td> {product.price} </td>    
                        <td> {product.stock} </td>    
                        <td>
                            <Link to={`/edit/${product.id}`} className='btn btn btn-outline-info m-1'>Edit</Link>
                            <button onClick={ ()=>deleteProduct(product.id) } className='btn btn-outline-danger m-1'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts