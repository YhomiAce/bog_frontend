import { Breadcrumbs } from "@material-tailwind/react";
import React  from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { ProductKyc } from "./Kyc/ProductKyc";
import { VendorKyc } from "./Kyc/VendorKyc";


export default function KycForm() {
    const auth = useSelector((state) => state.auth);
  
    let form = null;
  
      if (auth?.user?.userType === "vendor") {
        form = <PKycForm/>
      }else if(auth?.user?.userType === "professional"){
        form = <SKycForm/>
      }else if(auth?.user?.userType === "corporate_client"){
        form = <CKycForm/>
      }
    return form;
  }

export function PKycForm() {
    

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Complete your KYC</p>
                        <p className="fs-400 text-gray-600 mt-2">Lets get to know more about you to get you verified.</p>
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
                                <span>KYC Form</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>  
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white px-4 rounded-md pt-8 pb-8 lg:p-10 lg:pb-16 shadow lg:w-11/12 xl:w-10/12 mx-auto">
                        <VendorKyc/>
                    </div> 
                </div>
            </div>
        </div>
        )
}

export function SKycForm() {
    

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Complete your KYC</p>
                        <p className="fs-400 text-gray-600 mt-2">Lets get to know more about you to get you verified.</p>
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
                                <span>KYC Form</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>  
                {/* kyc contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white px-4 rounded-md pt-8 pb-8 lg:p-10 lg:pb-16 shadow lg:w-10/12 mx-auto">
                        {/* <ProductKyc/> */}
                        <VendorKyc/>
                    </div> 
                </div>
            </div>
        </div>
        )
}
export function CKycForm() {
    

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Complete your KYC</p>
                        <p className="fs-400 text-gray-600 mt-2">Lets get to know more about you to get you verified.</p>
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
                                <span>KYC Form</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>  
                {/* kyc contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="scale-ani" onClick={e => e.stopPropagation()}>
                        <form>
                            <div className="bg-white px-4 rounded-md pt-8 pb-8 lg:p-10 lg:pb-16 shadow fw-500">
                                <div className="lg:flex">
                                    <div className="mt-5 lg:mt-8 lg:pr-5 lg:w-6/12">
                                        <div className="flex justify-between"><label className="block">Upload Your CAC</label> <p className="pr-4"><AiOutlineInfoCircle/></p></div>
                                        <input type="file" className="w-full border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                    </div>
                                    <div className="mt-5 lg:mt-8 lg:w-6/12 lg:pl-6">
                                        <label className="block">Years of Experience</label>
                                        <input type="number" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" placeholder="Enter years of experience" required/>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Your Office Address</label>
                                    <textarea className="w-full h-24  border border-gray-400 rounded mt-2 py-2 px-2" placeholder="Enter your office address" required></textarea>
                                </div>
                            </div>
                            <div className="my-8 border-t border-gray-300 pt-8">
                                <div className="text-end">
                                    <button className="btn bg-primary text-white lg:px-24 lg:fw-600">Submit KYC</button>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
        )
}