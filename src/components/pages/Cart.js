import { useSelector } from 'react-redux';
// import CartItem from './CartItem';
import Footer from './home-comp/Footer';
import Header from './home-comp/Header';

export const Cart = () => {

    const cart = useSelector((state) => state.cart.cart);

        return (
            <div className="cart__left">
                <div>
                    <Header/>
                    <div className='min-h-screen'>
                        <h3>Shopping Cart</h3>
                        {cart?.map( item => {
                            return (
                                <div>
                                    <img src={item.img} alt="product"/>
                                    <p>{item.tittle}</p>
                                </div>
                            )}
                        )}
                    </div>
                    <Footer/>
                </div>
            </div>
        )
}