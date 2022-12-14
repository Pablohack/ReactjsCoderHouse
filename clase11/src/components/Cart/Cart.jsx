import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () =>{
    const {count} = useContext(CartContext)

    return(
        <div>
            <img src="https://png.pngtree.com/element_our/20200609/ourlarge/pngtree-shopping-cart-image_2223085.jpg" width={100} height={100}/>
            <div className='cart__count'>
                <p>{count}</p>
            </div>
            <Link to="/cart"> Terminar compra</Link>

        </div>

    )
}
export default Cart;