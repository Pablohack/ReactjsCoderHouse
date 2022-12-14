import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartFinish = () =>{
    const {listaProducto} = useContext(CartContext)
    console.log(listaProducto[0])
    return(<div> {
        listaProducto[0].map((lp)=>{
           return( 
           <div>
                <p>{lp.name}</p>
                <p>{lp.price}</p>
            </div>
            )
        })
    }
    </div>)

}

export default CartFinish;