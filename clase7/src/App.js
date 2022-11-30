import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
const [pokemon,setPokemon] = useState();
const [pokemonList,setPokemonList] = useState()

const callPokemon = (url) =>{
  axios.get(url).then(result=>{
    console.log(result)
    setPokemon(result.data)
  }).catch(error=>{
    console.error(error)
  })
}



const callListPokemon = ()=>{
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20').then(result=>{
    console.log(result)
    setPokemonList(result.data)
  })
}


useEffect(()=>{
  callListPokemon()
},[])

  return (
    <div className="App">
      <div className="App-header">
        { pokemonList && <div>
          <h1>Lista Pokemon</h1>
          {
            pokemonList.results.map((poke)=>{
              return(<li key={poke.url}><button onClick={(e)=>callPokemon(poke.url)}>{poke.name}</button></li>)
            })
          }
        </div>
        }
      </div>
      {pokemon && <div>
          <div>
           <p>Pokemon seleccionado es <strong>{pokemon.name}</strong></p>
          </div>
          <img src={pokemon.sprites.other['official-artwork'].front_default} />
        
      </div>}
    </div>
  );
}

export default App;
