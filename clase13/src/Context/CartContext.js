import {createContext, useReducer} from 'react'
import { CartReducer} from './CartReducer'

export const CartContext = createContext(null)

const initialState = {
    count: 0,
    producto:{},
    listaProducto:[]
}

export const CartContextProvider =({children}) =>{
    const [state,dispatch] = useReducer(CartReducer,initialState)

    function addCount(count,producto){
        dispatch({
            type:"ADD_ITEMS",
            payload:{count,producto}
        })
    }


    return(
        <CartContext.Provider
        value={{
            count:state.count,
            producto:state.producto,
            listaProducto:state.listaProducto,
            addCount,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
