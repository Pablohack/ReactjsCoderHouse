import logo from './logo.svg';
import './App.css';
import ShowData from './ShowData';
import { useState } from 'react';

function App({}) {
 const [option,setOption] = useState()
 const options =[
    {
        text:'Azul',
        value:1
    },
    {
        text:'Rojo',
        value:2
    }
 ]

 function optionSelected(value){
    setOption(value)
 }

  return (
    <div className="App">
        <ShowData 
        options={options}
        onSelect={optionSelected}
        defaultOption={1}
        type='select'
        />
        <p>Seleccionada: {option}</p>
    </div>
  );
}

export default App;
