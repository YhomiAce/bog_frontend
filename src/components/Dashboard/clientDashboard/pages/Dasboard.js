import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ChartLine from "../../assets/SalesChart";
import Chart from "../../assets/SalesChart";

export default function Dashboard() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="w-full py-6 bg-white px-4 rounded-lg">
          <div className="text-2xl fw-600 flex items-center">
            <p className="">Welcome, Greenmouse</p>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="pl-3 text-secondary"
            />
          </div>
          <p className="mt-3 fs-500">
            Start enjoying full control of your business all in one place
          </p>
        </div>
        <div className="mt-6">
          <div className="lg:grid-4 justify-between fs-500 fw-600">
            <div className="bg-white px-4 py-6 rounded-xl flex justify-between items-center shades">
              <div>
                <p className="text-xl fw-600 text-red-400">30 +</p>
                <p>New Arrivals</p>
              </div>
              <div className="bg-purple-100 p-2 rounded">
                <img src={require("../images/products.png")} alt="arrivals" />
              </div>
            </div>
            <div className="bg-white mt-4 lg:mt-0 px-4 py-6 rounded-xl flex justify-between items-center shades">
              <div>
                <p className="text-xl fw-600">1,230</p>
                <p>Products</p>
              </div>
              <div className="bg-green-100 p-2 rounded">
                <img src={require("../images/sales.png")} alt="" />
              </div>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-6 rounded-xl flex justify-between items-center shades">
              <div>
                <p className="text-xl fw-600">0</p>
                <p>My Cart</p>
              </div>
              <div className="bg-red-100 px-2 py-1 rounded">
                <img
                  src={require("../images/bags.png")}
                  alt="cart"
                  className="w-7"
                />
              </div>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-6 rounded-xl flex justify-between items-center shades">
              <div>
                <p className="text-xl fw-600">0</p>
                <p>Meetings</p>
              </div>
              <div className="bg-blue-100 p-2 rounded">
                <img src={require("../images/leads.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12 fw-600 fs-500 bg-white px-3 py-3 mt-6 rounded-lg">
          <div className="flex py-3 justify-between">
            <p className="text-lg mb-5">Top Suppliers</p>
            <p className="pr-8 text-primary">more</p>
          </div>
          <div className="pr-4">
            <div className="flex w-full my-2 py-2 border-b justify-between">
              <p>Greenmouse Technologies</p>
              <p>Granites</p>
            </div>
            <div className="flex w-full my-2 py-2 border-b justify-between">
              <p>Mouse Technologies</p>
              <p>Fine Sand</p>
            </div>
            <div className="flex w-full my-2 py-2 border-b justify-between">
              <p>Metalbox</p>
              <p>Sharp Sand</p>
            </div>
            <div className="flex w-full my-2 py-2 border-b justify-between">
              <p>Mouse Technologies</p>
              <p>Fine Sand</p>
            </div>
            <div className="flex w-full my-2 py-2 border-b justify-between">
              <p>Mouse Technologies</p>
              <p>Fine Sand</p>
            </div>
          </div>
              </div>
              <div>
                  {/* <ChartLine /> */}
              </div>
      </div>
    </div>
  );
}
