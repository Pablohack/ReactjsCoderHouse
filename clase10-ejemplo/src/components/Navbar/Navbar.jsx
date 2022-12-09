import { Link } from 'react-router-dom';
import { useContext} from 'react';
import './Navbar.css';
import {ThemeContext} from '../../context/ThemeContext';
import ThemeMode from '../ThemeMode/ThemeMode';

const NavBar = ({menus, categorias}) =>{
    const {color} = useContext(ThemeContext);

    return(
    <div className='navbar' style={{backgroundColor:color}}>
        {
            // menus.map((menu)=>{
            //     return <Link className='navbar__menu' 
            //     to={menu.href} >{menu.name}</Link>
            // })
           menus ? menus.map((a)=> <p>{a}</p>) : categorias.map((a)=><p>{a}</p>)
        }
        {
            categorias.map((categoria)=>{
                return <Link to={`/category/${categoria.id}`} className='navbar__category'>{categoria.name}</Link>
            })

        }
    <ThemeMode />
    </div>)
}

export default NavBar;