import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [contador,setContador] = useState(0)

useEffect(()=>{
},[contador])

  return (
    <div className="App">
     <h1>UseState y useEffect ejemplo</h1>
     <p>Has hecho click {contador} veces</p>
     <button onClick={()=> setContador(contador + 1)}>Sumemos un click!</button>
    </div>
  );
}

export default App;
