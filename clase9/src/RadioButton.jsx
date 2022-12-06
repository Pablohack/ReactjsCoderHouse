const RadioButton =({options,onSelect,defaultOption})=>{
return(
    options.map((o) => (
        <div>
          <input
            onChange={(evt) => {
              console.log(evt);
              onSelect(o.value);
            }}
            type="radio"
            name="color"
            checked={defaultOption === o.value}
            id={o.value}
          />
          <label for={o.value}>{o.text}</label>
        </div>
)
)
)
}

export default RadioButton;