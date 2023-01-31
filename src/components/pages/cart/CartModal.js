import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { SuccessAlertWithRedirection } from "../../../../src/services/endpoint";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Spinner from "../../../../src/components/layouts/Spinner";
import Axios from "../../../../src/config/config";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../../redux/actions/cartAction";

export const CartModal = ({CloseModal}) => {

    const AuhtCheck = () => {
        Swal.fire({
          title: " ",
          imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/authentication-icon.png",
          imageWidth: "75px",
          //text: 'Please Sign Up or Login to order for products. Thank You!',
          html: 'Please <a href="/signup" style=" color: red; "> Sign Up </a> or <a href="/login" style=" color: red; ">Login</a> to order for products. Thank You!',
          buttonsStyling: "false",
          denyButtonText: 'Sign Up',
          confirmButtonText: "Login",
          showDenyButton: true,
          showCancelButton: true,
          cancelButtonColor: "rgba(254, 0, 56, 1)",
          confirmButtonColor: "#3F79AD",
          denyButtonColor: "#ec8b20"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          } else if (result.isDenied) {
            navigate("/signup");
          }
        });
      }
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
          contact_name: "",
          contact_email: "",
          contact_phone: "",
        },
      });// eslint-disable-next-line
      const { city, state, country, postal_code, address, contact_name, contact_email, contact_phone } = form.values;
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
    
      const gotoLink = (orderId) => {
        navigate("/ordersuccess", {
          state: {
            orderId
          }
        })
      }
    
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
              contact_name: value.contact_name,
              contact_email: value.contact_email,
              contact_phone: value.contact_phone,
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
          const res = await Axios.post("/orders/submit-order", payload, config);
          const orderId = res.order.id
          setLoading(false);
          CloseModal();
          SuccessAlertWithRedirection("Order in Progress!", gotoLink(orderId));
        } catch (error) {
          CloseModal();
          setLoading(false);
          if (error?.response?.data?.message) {
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
    <div>
        <form onSubmit={form.handleSubmit}>
            <div className="mt-3">
                <label className="block">Contact Name</label>
                <input
                type="text"
                placeholder="enter contact name"
                className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
                name="contact_name"
                required
                id="contact_name"
                value={contact_name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                />
            </div>
            <div className="lg:flex">
                <div className="w-full lg:w-6/12 lg:pr-3 mt-3">
                    <label className="block">Contact Email</label>
                    <input
                        type="text"
                        placeholder="enter contact email"
                        className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
                        name="contact_email"
                        required
                        id="contact_email"
                        value={contact_email}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                </div>
                <div className="w-full lg:w-6/12 lg:pl-3 mt-3">
                <label className="block">Phone Number</label>
                    <input
                        type="text"
                        placeholder="enter phone number"
                        className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
                        name="contact_phone"
                        required
                        id="contact_phone"
                        value={contact_phone}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                </div>
            </div>
            <div className="lg:flex">
                <div className="w-full lg:w-6/12 lg:pr-3 mt-2">
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
                <div className="w-full lg:w-6/12 lg:pl-3 mt-2">
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
            </div>
            <div className="lg:flex">
                <div className="w-full lg:w-6/12 pr-3 mt-2">
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
                <div className="mt-2 w-full lg:w-6/12 lg:pl-3">
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
            </div>
            <div className="fw-600 my-4">
                <div className="flex justify-between my-4">
                <p>TOTAL COST</p>
                <p>NGN {formatNumber(totalAmount)}</p>
                </div>

                {auth.isAuthenticated &&
                (value.address !== null && value.address !== '') ? (


                    <PaystackButton
                    
                    text="CHECKOUT"
                    label="CHECKOUT"
                    className="w-full btn bg-primary text-white"
                    {...componentProps}
                    />
                ) 
                : (
                    <button
                    onClick={() => AuhtCheck()}
                    className="w-full btn bg-primary text-white"
                    >
                    CHECKOUT
                    </button>
                )}
            </div>
            </form>
    </div>
  )
}
