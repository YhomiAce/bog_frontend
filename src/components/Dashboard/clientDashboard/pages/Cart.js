import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { PaystackButton } from "react-paystack";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../../../redux/actions/cartAction";
import CartItems from "./CartItems";

export default function Cart() {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart.cart);
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let totalAmount = 0;
    carts.forEach(cart => {
        totalAmount += cart.price * cart.quantity
    });

    const handlePaystackSuccessAction = (reference) => {
        alert("Payment successful")
        console.log(reference);
        dispatch(clearCart())
    }
    const handlePaystackCloseAction = () => {
        console.log('incorrect transaction');
    }

    const config = {
        reference: "TR-" + (new Date()).getTime().toString(),
        email: "user@example.com",
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
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">My Cart</p>
                    <p className="fs-400 text-gray-600 mt-2">Manage products on your cart.</p>
                    <Breadcrumbs className="bg-white pl-0 mt-4">
                        <Link to="/" className="opacity-60">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </Link>
                        <Link to="/dashboard" className="opacity-60">
                            <span>Dashboard</span>
                        </Link>
                        <Link to="" className="">
                            <span>Cart</span>
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="p-5">
                    <div className="lg:grid-74">
                        <div className="bg-white px-4 lg:px-8 py-6 rounded-md">
                            <p className="text-lg fw-600">Cart Products {carts.length}</p>
                            <div className="lg:fs-500 fs-400">
                                {carts.length > 0 ? carts.map((item, index) => {
                                    return (
                                        <CartItems key={index} item={item} />
                                    )
                                }) : <h3 className="mt-3">No Item in cart</h3>
                                }
                            </div>
                        </div>
                        {
                            totalAmount > 0 ?
                                <div className="mt-8 lg:mt-0">
                                    <div className="bg-white px-4 lg:px-8 py-6 rounded-md">
                                        <p className="text-lg fw-600">Cart Summary</p>
                                        <div className="my-2 py-4 border-t border-b">
                                            <div className="flex justify-between fw-600 fs-700">
                                                <p>Subtotal</p>
                                                <p>NGN {formatNumber(totalAmount)}</p>
                                            </div>
                                            <p className="pt-2 fs-400">Delivery fees not included yet</p>

                                        </div>
                                        <div className="py-4">
                                            {/* <button className="w-full rounded-md text-white fw-600 py-2 bg-secondary">CHECKOUT (NGN {formatNumber(totalAmount)})</button> */}
                                            <PaystackButton text={`CHECKOUT`} label='CHECKOUT' className='w-full btn bg-primary text-white' {...componentProps} />
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}