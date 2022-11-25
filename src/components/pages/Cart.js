import { useSelector, useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, clearCart, deleteItem } from '../../redux/actions/cartAction';
// import CartItem from './CartItem';
import Footer from './home-comp/Footer';
import Header from './home-comp/Header';
import { PaystackButton } from "react-paystack"
import { MdDeleteOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const baseURL = process.env.REACT_APP_IMAGE_URL;

export const Cart = () => {
    const navigate = useNavigate();
    const carts = useSelector((state) => state.cart.cart);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let totalAmount = 0;
    carts.forEach(cart => {
        totalAmount += cart.price * cart.quantity
    });

    const handlePaystackSuccessAction = (reference) => {
        console.log(reference);
        dispatch(clearCart())
    }
    const handlePaystackCloseAction = () => {
        console.log('incorrect transaction');
    }

    const config = {
        reference: "TR-"+ (new Date()).getTime().toString(),
        email: auth?.user?.email,
        amount: totalAmount,
        publicKey: 'pk_test_0c79398dba746ce329d163885dd3fe5bc7e1f243',
      };
      const componentProps = {
        ...config,
        // text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
        <div className="cart__left">
            <div>
                <Header />
                <div className='section'>
                    <div className='box'>
                        <div>
                            <p className='mb-10 text-3xl fw-600'>My Cart</p>
                            <div className='lg:grid-83'>
                                <div>
                                    {carts?.map(item => {
                                        return (
                                            <div>
                                                <div className='lg:flex items-center relative'>
                                                    <div className='lg:w-3/12'>
                                                        {/* <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="products" className="w-40 rounded-md h-20 lg:h-40" /> */}
                                                        <img src={`${baseURL}/${item.image}`}  alt="products" className="w-40 rounded-md h-20 lg:h-40" />
                                                    </div>
                                                    <div className='lg:w-6/12'>
                                                        <p className='fw-500'>{item.name}</p>
                                                        <p className='h-12 overflow-y-scroll'>{item.description}</p>
                                                    </div>
                                                    <div className='lg:w-3/12 lg:ml-3'>
                                                        <p>NGN {item.price}</p>
                                                        <div className='flex mt-2 fw-600'>
                                                            <button className='border border-gray-300 rounded px-2 mr-2' onClick={() => dispatch(decrementQuantity(item))}>-</button>
                                                            <p>{item.quantity}</p>
                                                            <button className='border border-gray-300 rounded px-2 ml-2' onClick={() => dispatch(incrementQuantity(item))}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className='absolute top-0 right-12 text-red-500 cursor-pointer text-xl'>
                                                        <MdDeleteOutline onClick={() => dispatch(deleteItem(item.id))}/>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                                <div className='relative' >
                                    <div className='rounded-md shadow-md py-5 px-3 lg:px-5 sticky top-24'>
                                        <p class="text-2xl fw-600">Order Summary</p>
                                        <div className='py-5 border-y border-gray-400 mt-6'>
                                            <div className='fw-600 flex justify-between'>
                                                <p>ITEMS <span className='px-2'></span></p>
                                                <p>{carts.length}</p>
                                            </div>
                                            {/* <div className='mt-4'>
                                                <label className='fw-600'>SHIPPING</label>
                                                <select className='w-full py-2 px-2 border border-gray-300 rounded-md mt-3'></select>
                                            </div> */}
                                            {/* <div className='mt-4'>
                                                <label className='fw-600'>REFERRAL CODE</label>
                                                <input className='w-full py-2 px-2 border border-gray-300 rounded-md mt-3' type="text" placeholder='Enter your code' />
                                            </div> */}
                                        </div>
                                        <div className='fw-600 my-4'>
                                            <div className='flex justify-between my-4'>
                                                <p>TOTAL COST</p>
                                                <p>NGN {formatNumber(totalAmount)}</p>
                                            </div>
                                            {
                                                auth.isAuthenticated ? <PaystackButton text='CHECKOUT' label='CHECKOUT' className='w-full btn bg-primary text-white' {...componentProps}  /> :
                                                <button onClick={() => navigate("/login")} className='w-full btn bg-primary text-white'>LoGIN</button>
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}