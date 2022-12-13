import Count from '../Count/Count'

const ItemDetail =({producto})=>{
    return(
        <div>

            <h1>detalle del producto {producto[0].name}</h1>
            <img src={producto[0].img} width={300} height={300}/>
            <Count typeCount="input" />
        </div>
    )
}

export default ItemDetail;