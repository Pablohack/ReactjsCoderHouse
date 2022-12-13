import { useState } from "react"
import Button from './Button';
import Input from './Input'

const Count =({typeCount})=>{
    const [count,setCount] = useState(0)

    return typeCount == 'button' ? <Button /> : <Input />
}
export default Count