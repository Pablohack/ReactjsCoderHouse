import { Link } from "react-router-dom";

const Item =({producto})=>{
    return(
    <div> 
        <div className='itemlistcontainer__producto'>
            <img src={producto.img} width={100} height={100}/>
           <Link to={`/item/${producto.id}`} ><p>{producto.name}</p></Link>
        </div>
    </div>
    )
}
export default Item;