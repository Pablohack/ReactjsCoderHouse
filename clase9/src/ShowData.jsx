import Select from './Select'
import RadioButton from './RadioButton'
const ShowData =({options,onSelect,defaultOption,type})=>{
return type === 'select'
? <Select options={options} onSelect={onSelect} /> 
: <RadioButton options={options} onSelect={onSelect} defaultOption={defaultOption}/>
}
export default ShowData;