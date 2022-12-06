import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detalle = () =>{
    const {idproducto, nombre} = useParams();
    return(
        <div>
            <h1>Detalle del producto {nombre} con id {idproducto} </h1>
            <img width={100} height={100} src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png" />
            <h3>Detalle del producto</h3>
        </div>
    )
}

export default Detalle;