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
import { fetchStateAddresses } from "../../../redux/actions/addressAction";

export const CartModal = ({ CloseModal }) => {
  const AuhtCheck = () => {
    Swal.fire({
      title: " ",
      imageUrl:
        "https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/authentication-icon.png",
      imageWidth: "75px",
      //text: 'Please Sign Up or Login to order for products. Thank You!',
      html: 'Please <a href="/signup" style=" color: red; "> Sign Up </a> or <a href="/login" style=" color: red; ">Login</a> to order for products. Thank You!',
      buttonsStyling: "false",
      denyButtonText: "Sign Up",
      confirmButtonText: "Login",
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonColor: "rgba(254, 0, 56, 1)",
      confirmButtonColor: "#3F79AD",
      denyButtonColor: "#ec8b20",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      } else if (result.isDenied) {
        navigate("/signup");
      }
    });
  };
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [address_, setAddress_] = useState({});

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
  }); // eslint-disable-next-line
  const {
    city,
    state,
    country,
    postal_code,
    address,
    contact_name,
    contact_email,
    contact_phone,
  } = form.values;
  const orderFormvalue = form.values;
  const [orderForm, setOrderForm] = useState({
    city: null,
    state: null,
    country: null,
    postal_code: null,
    address: null,
    home_address: null,
    contact_name: null,
    contact_email: null,
    contact_phone: null,
  });

  let productsArray = carts.map((option) => {
    let prodInfo = {};
    prodInfo.productId = `${option.id}`;
    prodInfo.quantity = option.quantity;
    return prodInfo;
  });

  const getStatesAddress = (state) => {
    setOrderForm({ ...orderForm, state });
    fetchStateAddresses(setAddresses, auth.user, state);
  };

  const getAddressInfo = (id) => {
    if (id !== "") {
      const _address = addresses.find((_a) => _a.id === id);

      setAddress_(_address);
      setOrderForm({ ...orderForm, address: _address.id });
    } else {
      setOrderForm({ ...orderForm, address: "" });
    }
  };

  const totalCost = () => {
    if (address_ !== null) {
      if (Object.keys(address_).length > 0) {
        return totalAmount + address_.charge;
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    setProducts(productsArray);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const gotoLink = (orderId) => {
    navigate("/ordersuccess", {
      state: {
        orderId,
      },
    });
  };

  const sendOrder = async (payment) => {
    try {
      setLoading(true);
      const payload = {
        products: products,
        shippingAddress: {
          city: address_.city,
          state: address_.state,
          country: address_.country,
          postal_code: address_.zipcode,
          address: address_.address,
          home_address: address_.home_address,
          // charge: address_.charge,
          contact_name: orderForm.contact_name,
          contact_email: orderForm.contact_email,
          contact_phone: orderForm.contact_phone,
        },
        paymentInfo: {
          reference: payment.reference,
          amount: totalCost(),
        },
        discount: 0,
        deliveryFee: address_.charge,
        totalAmount: totalCost(),
      };
      console.log(payload);
      const config = {
        headers: {
          "Content-Type": "Application/json",
          authorization: localStorage.getItem("auth_token"),
        },
      };
      const res = await Axios.post("/orders/submit-order", payload, config);
      const orderId = res.order.id;
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
    amount: totalCost() * 100,
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
            value={orderForm.contact_name}
            onChange={(e) =>
              setOrderForm({ ...orderForm, contact_name: e.target.value })
            }
          />
          {orderForm.contact_name === "" ? (
            <p className="text-red-500">{"Contact Email is required"}</p>
          ) : null}
        </div>
        <div className="lg:flex">
          <div className="w-full lg:w-6/12  mt-3">
            <label className="block">Contact Email</label>
            <input
              type="text"
              placeholder="enter contact email"
              className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
              name="contact_email"
              required
              id="contact_email"
              value={orderForm.contact_email}
              onChange={(e) =>
                setOrderForm({ ...orderForm, contact_email: e.target.value })
              }
            />
            {orderForm.contact_email === "" ? (
              <p className="text-red-500">{"Contact Email is required"}</p>
            ) : null}
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
              value={orderForm.contact_phone}
              onChange={(e) =>
                setOrderForm({ ...orderForm, contact_phone: e.target.value })
              }
            />
            {orderForm.contact_phone === "" ? (
              <p className="text-red-500">{"Contact Phone is required"}</p>
            ) : null}
          </div>
        </div>
        <div className="lg:flex">
          <div className="w-full lg:w-6/12 mt-2">
            <label className="block">State</label>
            <input
              type="text"
              placeholder="enter your state"
              className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
              name="state"
              required
              id="state"
              value={orderForm.state}
              onChange={(e) => 
                getStatesAddress(e.target.value)
              }
            />
            {orderForm.state === "" ? (
              <p className="text-red-500">{"State is required"}</p>
            ) : null}
          </div>
          <div className="w-full lg:w-6/12 lg:pl-3 mt-2">
            <label className="block">Address</label>
            <input
              type="text"
              placeholder="enter your address"
              className="w-full mt-1 py-2 px-2 border-gray-400 rounded border"
              name="home_address"
              required
              id="home_address"
              value={orderForm.home_address}
              onChange={(e) => 
                setOrderForm({...orderForm, home_address: e.target.value})
              }
            />
            {orderForm.home_address === "" ? (
              <p className="text-red-500">{"Destination address is required"}</p>
            ) : null}
          </div>
        </div>
        <div>
          <div className="mt-2 w-full">
            <label className="block">Nearest address</label>
            <select
              name="address"
              className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
              id="nearest_address"
              value={orderForm.address}
              onChange={(e) => getAddressInfo(e.target.value)}
            >
              <option value={""}>--Select Address--</option>
              {addresses.map((_address) => (
                <option value={_address.id}>
                  {_address.address}, {_address.state.toLowerCase()}
                </option>
              ))}
            </select>
            {orderForm.address === "" ? (
              <p className="text-red-500">{"Nearest address is required"}</p>
            ) : null}
          </div>
        </div>

        <div className="fw-600 my-4">
          <div className="flex justify-between my-4">
            <p>SUB TOTAL</p>
            <p>NGN {formatNumber(totalAmount)}</p>
          </div>
          <div className="flex justify-between my-4">
            <p>DELIVERY FEE</p>
            <p>
              NGN{" "}
              {Object.keys(address_).length > 0
                ? formatNumber(address_.charge)
                : 0}
            </p>
          </div>
          <div className="flex justify-between my-4">
            <p>TOTAL</p>
            <p>NGN {formatNumber(totalCost())}</p>
          </div>

          {auth.isAuthenticated &&
          orderForm.address !== null &&
          orderForm.address !== "" ? (
            <PaystackButton
              text="CHECKOUT"
              label="CHECKOUT"
              className="w-full btn bg-primary text-white"
              {...componentProps}
            />
          ) : (
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
  );
};
