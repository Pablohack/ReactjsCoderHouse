import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {categorias,menus} from './mock'
import CartFinish from './components/CartFinish/CartFinish';

function App() {

  return (
    <BrowserRouter  className="App">
      <NavBar menus={menus} categorias={categorias} />
      <Routes>
        <Route exact path='/' element={<ItemListContainer bgmode="dark"/>}/>
        <Route exact path='/category/:id' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<CartFinish />} />

      </Routes>
    </BrowserRouter >
  );
}
export default App;
