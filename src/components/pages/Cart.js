import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  clearCart,
  deleteItem,
} from "../../redux/actions/cartAction";
// import CartItem from './CartItem';
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { PaystackButton } from "react-paystack";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SuccessAlert } from "../../../src/services/endpoint";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Spinner from "../../../src/components/layouts/Spinner";
import Axios from "../../../src/config/config";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

// const baseURL = process.env.REACT_APP_IMAGE_URL; jhjh

export const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  let totalAmount = 0;
  carts.forEach((cart) => {
    totalAmount += cart.price * cart.quantity;
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

  const sendOrder = async () => {
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
          reference: "TR-" + new Date().getTime().toString(),
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
    sendOrder();
    dispatch(clearCart());
  };
  const handlePaystackCloseAction = () => {
    console.log("incorrect transaction");
  };

  const config = {
    reference: "TR-" + new Date().getTime().toString(),
    email: auth?.user?.email,
    amount: totalAmount,
    publicKey: "pk_test_0c79398dba746ce329d163885dd3fe5bc7e1f243",
  };
  const componentProps = {
    ...config,
    // text: 'Paystack Button Implementation',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  if (loading) {
    return (
      <center>
        <Spinner />
      </center>
    );
  }
  return (
    <div className="cart__left">
      <div>
        <Header />
        <div className="section">
          <div className="box">
            <div>
              <p className="mb-10 text-3xl fw-600">My Cart</p>
              <div className="lg:grid-83 relative">
                <div className="relative">
                  <div>
                    <p class="text-2xl fw-600">Item(s)</p>
                    <div className="mt-4">
                      {carts?.map((item) => {
                        return (
                          <div>
                            <div className="lg:flex mt-6 items-center relative">
                              <div className="lg:w-3/12">
                                {/* <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="products" className="w-40 rounded-md h-20 lg:h-40" /> */}
                                <img
                                  src={`${item.image}`}
                                  alt="products"
                                  className="w-40 border rounded-md h-20 lg:h-40"
                                />
                              </div>
                              <div className="lg:w-6/12">
                                <p className="fw-500">{item.name}</p>
                                <p className="h-12 overflow-y-scroll mt-4">
                                  {item.description}
                                </p>
                              </div>
                              <div className="lg:w-3/12 lg:ml-6">
                                <p>NGN {item.price}</p>
                                <div className="flex mt-2 fw-600">
                                  <button
                                    className="border border-gray-300 rounded px-2 mr-2"
                                    onClick={() =>
                                      dispatch(decrementQuantity(item))
                                    }
                                  >
                                    -
                                  </button>
                                  <p>{item.quantity}</p>
                                  <button
                                    className="border border-gray-300 rounded px-2 ml-2"
                                    onClick={() =>
                                      dispatch(incrementQuantity(item))
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="absolute top-0 right-12 text-red-500 cursor-pointer text-xl">
                                <MdDeleteOutline
                                  onClick={() => dispatch(deleteItem(item.id))}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                  </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  <div className="rounded-md shadow-md py-5 px-3 lg:px-5 sticky top-24">
                    <div class="grid">
                        <p class="text-2xl fw-600">Order Summary</p>
                        <div className="py-5 border-y border-gray-400 mt-6">
                        <div className="fw-600 flex justify-between">
                            <p>
                            ITEMS <span className="px-2"></span>
                            </p>
                            <p>{carts.length}</p>
                        </div>
                        </div>
                      <form onSubmit={form.handleSubmit}>
                        <div className="w-full mt-2">
                          <label className="block">City</label>
                          <input
                            type="text"
                            placeholder="enter your city"
                            className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
                            name="city"
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

                          <input
                            type="text"
                            placeholder="enter your address"
                            className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
                            name="address"
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
                      </form>
                      
                        <div className="fw-600 my-4">
                        <div className="flex justify-between my-4">
                            <p>TOTAL COST</p>
                            <p>NGN {formatNumber(totalAmount)}</p>
                        </div>
                        {auth.isAuthenticated ? (
                            <PaystackButton
                            text="CHECKOUT"
                            label="CHECKOUT"
                            className="w-full btn bg-primary text-white"
                            {...componentProps}
                            />
                        ) : (
                            <button
                            onClick={() => navigate("/login")}
                            className="w-full btn bg-primary text-white"
                            >
                            LoGIN
                            </button>
                        )}
                        </div>
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
  );
};
