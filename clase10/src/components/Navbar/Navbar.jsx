import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../context/ThemeContext'
import ThemeButton from '../ThemeButton/ThemeButton';
import './Navbar.css';

const NavBar = ({menus, categorias}) =>{
    const {color} = useContext(ThemeContext)
    return(
    <div className='navbar' style={{backgroundColor:color}}>
        {
            menus.map((menu)=>{
                return <Link className='navbar__menu' 
                to={menu.href} >{menu.name}</Link>
            })
        }
        {
            categorias.map((categoria)=>{
                return <Link to={`/category/${categoria.id}`} className='navbar__category'>{categoria.name}</Link>
            })

        }
        <ThemeButton />
    </div>)
}

export default NavBar;