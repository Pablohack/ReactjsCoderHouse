import { useState } from "react"

const Input =({})=>{
const [value,setValue] = useState(0)

    return(
        <div>
            <h4>agregar item</h4>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
            <button>Agregar cantidad</button>
        </div>
    )
}
export default Input