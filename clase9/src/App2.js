import logo from './logo.svg';
import './App.css';

function App({onClick}) {
  function onResize(){
    
    console.log('Se dispara evento on risize')
  }
   function FuncionGato(event){
    console.log("evento onClick1")
   }

   function onHandlerKeyPress(event){
    if(event.target.value === "b"){
      event.preventDefault();
    }
    console.log("Evento onKeyPress " + event.target.value)
   }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Titulo para demostrar resize</h1>
      <button onClick={(e)=>FuncionGato(e)} >Boton de Prueba
      </button>
      <input placeholder='Prueba' onKeyDown={(e)=>onHandlerKeyPress(e)} />
      </header>
    </div>
  );
}

export default App;
