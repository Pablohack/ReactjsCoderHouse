import { useState } from "react"

const Button =({})=>{
    const [count,setCount] = useState(0)

    const handlerAdd=()=> setCount(count + 1)
    const handlerRest=()=> setCount(count - 1)

    return(
        <div>
            <h4>agregar item</h4>
            <button onClick={()=>handlerAdd}>+</button>
            <input value={count}/>
            <button onClick={()=>handlerRest}>-</button>
        </div>
    )
}
export default Button