import './App.css';
import Title from './Components/Title/Title'

function App() {
  const lists =["God of war", "GTA V", "Resident Evil", "Minions"]
  return (
    <div className="App">
      <header className="App-header">
        <Title title='Titulo desde el componente padre' list={lists} />
      </header>
    </div>
  );
}

export default App;
