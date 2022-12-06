import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({menus}) =>{
    return(
    <div className='navbar'>
        {
            menus.map((menu)=>{
                return <Link className='navbar__menu' to={menu.href} >{menu.name}</Link>
            })
        }
    </div>)
}

export default NavBar;