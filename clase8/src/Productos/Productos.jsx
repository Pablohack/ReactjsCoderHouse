import {Link} from 'react-router-dom'
const Productos = ()=>{
    const productos = [
        {
            id:'1',
            nombre:'Zapatilla'
        },
        {
            id:'2',
            nombre:'Polera'
        },
        {
            id:'3',
            nombre:'Pantalon'
        }
    ]
    return (
   <div>
    <h1>Productos</h1>
    {
       productos.map((producto)=>{
        return <div> <Link to={`/detalleproducto/${producto.id}/${producto.nombre}`} >{producto.nombre}</Link></div>
       }) 
    }
   </div>
    )
}

export default Productos;