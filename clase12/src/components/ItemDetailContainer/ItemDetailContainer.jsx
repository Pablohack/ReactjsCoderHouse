import ItemDetail from '../ItemDetail/ItemDetail'
import {Productos} from '../../mock'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ItemDetailContainer =()=>{
    const {id} = useParams()
    const [producto,setProducto] = useState()
    useEffect(() =>{
        const product = Productos.filter((p)=> p.id == id)
        setProducto(product)
    },[id])
   return   producto ? <ItemDetail producto={producto} /> : <h1>cargando</h1>
    
}

export default ItemDetailContainer;