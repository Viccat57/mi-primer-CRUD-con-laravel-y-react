import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

const CreateProduct = () => {
    const [descripcion, setdescripcion] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {descripcion: descripcion, price: price, stock: stock})
        navigate('/')
    }
    
  return (
    <div>
        <h3>Create Product</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>descripcion</label>
                <input 
                    value={descripcion}
                    onChange={ (e)=> setdescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input 
                    value={price}
                    onChange={ (e)=> setPrice(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock</label>
                <input 
                    value={stock}
                    onChange={ (e)=> setStock(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-outline-primary'>submit</button>
        </form>
    </div>
  )
}

export default CreateProduct