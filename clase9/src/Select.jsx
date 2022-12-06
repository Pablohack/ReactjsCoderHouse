
const Select =({options,onSelect})=>{
    return(
        <select onChange={(e)=>onSelect(e.target.value)}>
            {
                options.map( opt =>
               
                    <option
                    value={opt.value}>
                        {opt.text}
                    </option>
                
                )
            }
        </select>
    )
}

export default Select;