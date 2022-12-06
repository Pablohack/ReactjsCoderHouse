import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  NavBar from './Navbar/Navbar';
import Home from './Home/Home'
import Productos from './Productos/Productos'
import Contacto from './Contacto/Contacto'
import Detalle from './Detalle/Detalle'
function App() {
  const menus = [{
    name:'Inicio',
    href:'/'
  },
  {
    name:'Productos',
    href:'/producto'
  }

]
  return (
    <BrowserRouter  className="App">
      <NavBar menus={menus} />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/producto' element={<Productos />} />
        <Route exact path='/contacto' element={<Contacto/>} />
        <Route exact path='/detalleproducto/:idproducto/:nombre' element={<Detalle />} />
      </Routes>
    </BrowserRouter >
  );
}
export default App;
