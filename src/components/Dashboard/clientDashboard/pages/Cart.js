import { Breadcrumbs } from "@material-tailwind/react";
// import React from "react";
import { PaystackButton } from "react-paystack";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../../../redux/actions/cartAction";
import CartItems from "./CartItems";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { SuccessAlert } from "../../../../../src/services/endpoint";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Spinner from "../../../../../src/components/layouts/Spinner";
import Axios from "../../../../../src/config/config";
import React, { useState, useEffect } from "react";

export default function Cart() {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart.cart);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let totalAmount = 0;
    carts.forEach(cart => {
        totalAmount += cart.price * cart.quantity
    });
    const form = useFormik({
        initialValues: {
            city: "",
            state: "",
            country: "",
            postal_code: "",
            address: "",
        },
    });
    const { city, state, country, postal_code, address } = form.values;
    const value = form.values;
    let productsArray = carts.map((option) => {
        let prodInfo = {};
        prodInfo.productId = `${option.id}`;
        prodInfo.quantity = option.quantity;
        return prodInfo;
    });
    useEffect(() => {
        setProducts(productsArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sendOrder = async (payment) => {
        try {
            setLoading(true);
            const payload = {
                products: products,
                shippingAddress: {
                    city: value.city,
                    state: value.state,
                    country: value.country,
                    postal_code: value.postal_code,
                    address: value.address,
                },
                paymentInfo: {
                    reference: payment.reference,
                    amount: totalAmount,
                },
                discount: 0,
                deliveryFee: 0,
                totalAmount: totalAmount,
            };
            console.log(payload);
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    authorization: localStorage.getItem("auth_token"),
                },
            };
            await Axios.post("/orders/submit-order", payload, config);
            setLoading(false);
            SuccessAlert("Order in Progress!");
        } catch (error) {
            setLoading(false);
            if (error.response.data.message) {
                toaster.notify(error.response.data.message, {
                    duration: "4000",
                    position: "bottom",
                });
                return;
            }
            toaster.notify(error.message, {
                duration: "4000",
                position: "bottom",
            });
        }
    };
    const handlePaystackSuccessAction = (reference) => {
        console.log(reference);
        sendOrder(reference);
        dispatch(clearCart())
    }
    const handlePaystackCloseAction = () => {
        console.log('incorrect transaction');
    }

    if (loading) {
        return (
            <center>
                <Spinner />
            </center>
        );
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
                                        <form onSubmit={form.handleSubmit}>
                                            <div className="w-full mt-2">
                                                <label className="block">City</label>
                                                <input
                                                    type="text"
                                                    placeholder="enter your city"
                                                    className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
                                                    name="city"
                                                    required
                                                    id="city"
                                                    value={city}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />
                                                {form.touched.city && form.errors.city ? (
                                                    <p className="text-red-500">{form.errors.city}</p>
                                                ) : null}
                                            </div>
                                            <div className="w-full mt-2">
                                                <label className="block">State</label>
                                                <input
                                                    type="text"
                                                    placeholder="enter your state"
                                                    className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
                                                    name="state"
                                                    required
                                                    id="state"
                                                    value={state}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />
                                                {form.touched.state && form.errors.state ? (
                                                    <p className="text-red-500">{form.errors.state}</p>
                                                ) : null}
                                            </div>
                                            <div className="w-full mt-2">
                                                <label className="block">Country</label>
                                                <input
                                                    type="text"
                                                    placeholder="enter your country"
                                                    className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
                                                    name="country"
                                                    required
                                                    id="country"
                                                    value={country}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />
                                                {form.touched.country && form.errors.country ? (
                                                    <p className="text-red-500">
                                                        {form.errors.country}
                                                    </p>
                                                ) : null}
                                            </div>
                                            <div className="w-full mt-2">
                                                <label className="block">Postal Code</label>
                                                <input
                                                    type="text"
                                                    placeholder="enter your city"
                                                    className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
                                                    name="postal_code"
                                                    required
                                                    id="postal_code"
                                                    value={postal_code}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />
                                                {form.touched.postal_code &&
                                                    form.errors.postal_code ? (
                                                    <p className="text-red-500">
                                                        {form.errors.postal_code}
                                                    </p>
                                                ) : null}
                                                <label className="block">Address</label>

                                                <input
                                                    type="text"
                                                    placeholder="enter your address"
                                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
                                                    name="address"
                                                    required
                                                    id="address"
                                                    value={address}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />
                                                {form.touched.address && form.errors.address ? (
                                                    <p className="text-red-500">
                                                        {form.errors.address}
                                                    </p>
                                                ) : null}
                                            </div>
                                            <div className="fw-600 my-4">
                                                <div className="flex justify-between my-4">
                                                    <p>TOTAL COST</p>
                                                    <p>NGN {formatNumber(totalAmount)}</p>
                                                </div>

                                                {auth.isAuthenticated ?
                                                    (value.address !== null && value.address !== '') ? (


                                                        <PaystackButton

                                                            text="CHECKOUT"
                                                            label="CHECKOUT"
                                                            className="w-full btn bg-primary text-white"
                                                            {...componentProps}
                                                        />
                                                    ) : <button
                                                        // onClick={() => navigate("/login")}
                                                        className="w-full btn bg-primary text-white"
                                                    >
                                                        CHECKOUT
                                                    </button>
                                                    : (
                                                        <button
                                                            onClick={() => navigate("/login")}
                                                            className="w-full btn bg-primary text-white"
                                                        >
                                                            LOGIN
                                                        </button>
                                                    )}
                                            </div>
                                        </form>
                                        {/* <div className="my-2 py-4 border-t border-b">
                                            <div className="flex justify-between fw-600 fs-700">
                                                <p>Subtotal</p>
                                                <p>NGN {formatNumber(totalAmount)}</p>
                                            </div>
                                            <p className="pt-2 fs-400">Delivery fees not included yet</p>

                                        </div> 
                                        <div className="py-4">
                                            {/* <button className="w-full rounded-md text-white fw-600 py-2 bg-secondary">CHECKOUT (NGN {formatNumber(totalAmount)})</button> */}
                                        {/* <PaystackButton text={`CHECKOUT`} label='CHECKOUT' className='w-full btn bg-primary text-white' {...componentProps} /> */}
                                        {/* </div> */}
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