import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { HiMenuAlt3, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {

    // const navigate = useNavigate()

    const auth = useSelector((state) => state.auth);
    const carts = useSelector((state) => state.cart.cart)
    const getTotalQuantity = carts.reduce((sum, cart) => {
        return sum + cart.quantity
    }, 0);


    const [menuShow, setMenuShow] = useState(false)
    const [homeMenu, setHomeMenu] = useState(false)

    const CloseMenu = () => {
        setMenuShow(false);
    }
    const CloseHome = () => {
        setHomeMenu(false);
    }

    return (
        <div className="relative z-10 bg-white">
            <div className="box">
                <div className="justify-between items-center flex py-2 pb-3">
                    <div className="w-4/12 hidden lg:flex items-center">
                        <ul className="flex xl:font-600 fw-600 fw-600 w-full justify-between">
                            <li><BsList className="xl:text-3xl text-2xl cursor-pointer transition hover:scale-110" onClick={() => setHomeMenu(true)} /></li>
                            <li><Link to="/shop">Products</Link></li>
                            <li><Link to="/services">Find Service Partner</Link></li>
                        </ul>
                    </div>
                    <div className="w-4/12 flex justify-center">
                        <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669563824/BOG/logo_1_1_ubgtnr.png" alt="logo" className="lg:w-40 " /></Link>
                    </div>
                    <div className="w-4/12 hidden fw-600 lg:flex justify-end items-center">
                        <Link to='/carts'>
                            <div className="text-xl mx-6 relative px-2 py-2 circle bg-light">
                                <HiOutlineShoppingBag />
                                <p className="absolute -top-2 right-0 fs-500 text-red-500">{getTotalQuantity || 0}</p>
                            </div>
                        </Link>
                        {
                            auth?.isAuthenticated ? <Link to="/dashboard" className="text-primary">
                                <button >Dashboard</button>
                            </Link> :
                                <>
                                    <Link to="/login" className="text-primary">
                                        <button >Login</button>
                                    </Link>
                                    <Link to="/signup" className="ml-7 px-6 bg-primary text-white py-2 rounded">
                                        <button>Get Started</button>
                                    </Link>
                                </>
                        }


                    </div>
                    <div className="text-black lg:hidden flex items-center">
                        <Link to='/carts'>
                            <div className="text-xl mx-6 relative px-2 py-2 circle bg-light">
                                <HiOutlineShoppingBag />
                                <p className="absolute -top-2 right-0 fs-500 text-red-500">{getTotalQuantity || 0}</p>
                            </div>
                        </Link>
                        <HiMenuAlt3 className="text-3xl fw-700" onClick={() => { setMenuShow(true) }} />
                    </div>

                </div>
            </div>
            {menuShow && (
                <div className="w-full bg-op absolute lg:hidden z-40 top-0 min-h-screen">
                    <div className="absolute menu lg:hidden w-10/12 bg-white px-6 z-40 top-0 min-h-screen">
                        <div className="flex justify-between pt-5">
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669563824/BOG/logo_1_1_ubgtnr.png" alt="logo" className="w-36" />
                            <MdOutlineCancel onClick={() => { setMenuShow(false) }} />
                        </div>
                        <div className="mt-10">
                            <ul className="list-none">
                                <li className="py-4"><Link to="/">Home</Link></li>
                                <li className="py-4"><Link to="/about">About</Link></li>
                                <li className="py-4"><Link to="/shop">Products</Link></li>
                                <li className="py-4"><Link to="/services">Service Partners</Link></li>
                                <li className="py-4"><Link to="/blog">Our Blog</Link></li>
                                <li className="py-4"><Link to="/jointeam">Join Our Team</Link></li>
                                <li className="py-4"><Link to="/contact">Contact Us</Link></li>
                                <li className="py-4"><Link to="/faqs">FAQs</Link></li>
                                <li className="pt-8" onClick={CloseMenu}>
                                    <Link to="/login">
                                        <Button className="px-10">Login</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {homeMenu && (
                <div className="w-full  bg-op fixed z-40 top-0 min-h-screen" onClick={CloseHome}>
                    <div className="absolute menu  w-3/12 bg-primary text-white pl-10 pr-6 z-40 top-0 min-h-screen">
                        <div className="flex justify-between pt-4">
                            <Link to="/"><img src={require("../../assets/images/BOOG 1.png")} alt="logo" className="w-36" /></Link>
                            <FontAwesomeIcon icon={faTimes} className="text-3xl cursor-pointer" onClick={CloseHome} />
                        </div>
                        <div className="mt-8 text-xl fw-500">
                            <ul>
                                <li className="py-4"><Link to="/">Home</Link></li>
                                <li className="py-4"><Link to="/about">About Us</Link></li>
                                <li className="py-4"><Link to="/faqs">FAQs</Link></li>
                                <li className="py-4"><Link to="/blog">Our Blog</Link></li>
                                <li className="py-4"><Link to="/contact">Contact Us</Link></li>
                                <li className="py-4"><Link to="/jointeam">Join our Team</Link></li>
                                <li className="py-4"><Link to="/">Become A Partner</Link></li>
                                <li className="py-4"><Link to="/privacy">Privacy Policy</Link></li>
                                <li className="py-4"><Link to="/terms">Terms and Conditions</Link></li>
                                <li>
                                    <ul className="mt-6 flex">
                                        <li><img src={require("../../assets/images/insta.png")} alt="insta" /></li>
                                        <li className="pl-4"><img src={require("../../assets/images/twitter.png")} alt="twitter" /></li>
                                        <li className="pl-4"><img src={require("../../assets/images/linkedn.png")} alt="linkedn" /></li>
                                        <li className="pl-4"><img src={require("../../assets/images/facebook.png")} alt="facebook" /></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}