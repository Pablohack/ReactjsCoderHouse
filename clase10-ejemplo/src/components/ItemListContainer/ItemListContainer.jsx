import { useState } from 'react';
import {Productos,categorias} from '../../mock';
import Item from '../Item/Item'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = () =>{
    const [item,setItem] = useState(Productos);
    const { id } = useParams()

    const FilterCategory = new Promise((resolve,eject)=>{
       if(id){
        const newProductos = Productos.filter((p)=>p.category == id)
        resolve(newProductos)}
        else{
          resolve(Productos)
        }

    
    })



    useEffect(()=>{
      FilterCategory.then((response)=>{
         setItem(response)
      })
    },[id])
    return(
        <div className='itemlistcontainer'>
          {
           item && item.map((producto)=>{
                return <Item producto={producto} />
            })
          }
        </div>
    )
}

export default ItemListContainer;