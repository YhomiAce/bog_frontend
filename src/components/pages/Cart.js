import { useSelector, useDispatch } from 'react-redux';
// import CartItem from './CartItem';
import Footer from './home-comp/Footer';
import Header from './home-comp/Header';

export const Cart = () => {

    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

        return (
            <div className="cart__left">
                <div>
                    <Header/>
                    <div className='section'>
                        <div className='box'>
                            <div>
                                <p className='mb-10 text-3xl fw-600'>My Cart</p>
                                <div className='lg:grid-83'>
                                    <div>
                                        {cart?.map( item => {
                                            return (
                                                <div>
                                                    <div className='lg:flex items-center'>
                                                        <div className='lg:w-3/12'>
                                                            <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="products" className="w-40 h-20 lg:h-40"/>
                                                        </div>
                                                        <div className='lg:w-3/12'>
                                                            <p>{item.name}</p>
                                                            <p>NGN {item.price}</p>
                                                            <div className='flex mt-2'>
                                                                <button className='border border-gray-300 rounded px-2 mr-2' onClick={() => dispatch({ type: 'INCREMENT_QUANTITY' })}>-</button>
                                                                <p>{item.quantity}</p>
                                                                <button className='border border-gray-300 rounded px-2 ml-2'>+</button>
                                                            </div>
                                                        </div>
                                                        <div className='lg:w-6/12 lg:ml-3'>
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        )}
                                    </div>
                                    <div className='relative' >
                                        <div className='rounded-md shadow-md py-5 px-3 lg:px-5 sticky top-24'>
                                            <p class="text-2xl fw-600">Order Summary</p>
                                            <div className='py-5 border-y border-gray-400 mt-6'>
                                                <div className='fw-600 flex justify-between'>
                                                    <p>ITEMS <span className='px-2'>{cart.quantity}</span></p>
                                                    <p>NGN 658,000</p>
                                                </div>
                                                <div className='mt-4'>
                                                    <label className='fw-600'>SHIPPING</label>
                                                    <select className='w-full py-2 px-2 border border-gray-300 rounded-md mt-3'></select>
                                                </div>
                                                <div className='mt-4'>
                                                    <label className='fw-600'>REFERRAL CODE</label>
                                                    <input className='w-full py-2 px-2 border border-gray-300 rounded-md mt-3' type="text" placeholder='Enter your code' />
                                                </div>
                                            </div>
                                            <div className='fw-600 my-4'>
                                                <div className='flex justify-between my-4'>
                                                    <p>TOTAL COST</p>
                                                    <p>NGN 658,000</p>
                                                </div>
                                                <button className='w-full btn bg-primary text-white'> CHECKOUT</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
}