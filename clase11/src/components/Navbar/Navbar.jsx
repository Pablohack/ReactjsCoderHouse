import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart'
import './Navbar.css';

const NavBar = ({menus, categorias}) =>{
    return(
    <div className='navbar'>
        {
            menus.map((menu)=>{
                return <Link className='navbar__menu' 
                to={menu.href} >{menu.name}</Link>
            })
        }
        <div className=''>
            {
                categorias.map((categoria)=>{
                    return <Link to={`/category/${categoria.id}`} className='navbar__category-link'>{categoria.name}</Link>
                })

            }
        </div>
        <Cart />
    </div>)
}

export default NavBar;