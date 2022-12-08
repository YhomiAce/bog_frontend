/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Breadcrumbs, CardBody } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getUserOrders } from "../../../../redux/actions/OrderAction";
import OrderItem from "./Order/OrderItem";
import OrderHeader from "./Order/OrderHeader";
import SearchHeader from "./Order/SearchHeader";

export default function Orders() {
  const dispatch = useDispatch();
  let orders = useSelector((state) => state.orders.userOrders)

  useEffect(() => {
    dispatch(getUserOrders())
  }, [])

  return (
    <div>
      <div className="fs-500 min-h-screen">
        <div className="w-full flex justify-between py-6 bg-white px-4 rounded-lg">
          <div>
            <p className="text-2xl fw-600">Orders</p>
            <p className="fs-400 text-gray-500 pt-4">
              Review and manage all your impending orders.
            </p>
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
                <span>Orders</span>
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <div className="p-5">
          <div className="bg-white lg:p-5 mt-6 rounded-lg">
            <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
              <TabList className="">
                <Tab>All Orders</Tab>
                <Tab>Pending</Tab>
                <Tab>Delivered</Tab>
                <Tab>Cancelled</Tab>
              </TabList>

              {/* All Orders */}
              <TabPanel>
                <SearchHeader />
                <CardBody>
                  <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead className="thead-light bg-light">
                        <OrderHeader />
                      </thead>
                      <tbody>
                        {
                          orders.length > 0 ? orders.map((item, index) => (
                            <OrderItem key={item.id} item={item} index={index} />
                          )) : null
                        }
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </TabPanel>

              {/* Pending Orders */}
              <TabPanel>
                <SearchHeader />
                <CardBody>
                  <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead className="thead-light bg-light">
                        <OrderHeader />
                      </thead>
                      <tbody>
                        {
                          orders.length > 0 ? orders.filter(order => order.status === "pending").map((item, index) => (
                            <OrderItem key={item.id} item={item} index={index} />
                          )) : null
                        }
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </TabPanel>

              {/* Delivered Orders */}
              <TabPanel>
                <SearchHeader />
                <CardBody>
                  <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead className="thead-light bg-light">
                        <OrderHeader />
                      </thead>
                      <tbody>
                        {
                          orders.length > 0 ? orders.filter(order => order.status === "completed").map((item, index) => (
                            <OrderItem key={item.id} item={item} index={index} />
                          )) : null
                        }
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </TabPanel>

              {/* Cancelled Orders */}
              <TabPanel>
                <SearchHeader />
                <CardBody>
                  <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead className="thead-light bg-light">
                        <OrderHeader />
                      </thead>
                      <tbody>
                        {
                          orders.length > 0 ? orders.filter(order => order.status === "cancelled").map((item, index) => (
                            <OrderItem key={item.id} item={item} index={index} />
                          )) : null
                        }
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
