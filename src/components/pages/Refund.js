import React from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

export default function Refund() {

   
    return (
        <div>
            <div className="font-primary">
                <Header/>
                <div className="bg-privacy bg-cover bg-center text-white lg:h-80 h-52 flex items-center">
                    <div className="box">
                        <div>
                            <p className="lg:text-4xl text-2xl fw-700 mb-2">Return Policy</p>
                        </div>
                    </div>
                </div>
                <div className="section">
                  <div className="box">
                    <div>
                      <p className="lg:py-6 pb-6 fw-600 fs-700">Return & Refund Policy</p>
                      <p className="">Thanks for shopping at **************.com</p>
                      <p className="mt-4">If you are not entirely satisfied with your purchase or rendered service, we're here to help.</p>
                      <div className="mt-4">
                        <p className="fw-600 fs-700">Returns</p>
                        <ul className="pb-2 list-disc pl-5 lg:pl-10 lg:w-8/12">
                          <li>You have to check the item before signing the delivery note.</li>
                          <li className="mt-1">You have 24 hours to return an item from the date you received it.</li>
                          <li className="mt-1">To be eligible for a return, your item must be unused and in the same condition that you received it.</li>
                          <li className="mt-1">Your item must be in the original packaging and in re-saleable condition.</li>
                          <li className="mt-1">Your item needs to have the receipt or proof of purchase as issued or generated from the BOG website.</li>
                          <li className="mt-1">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non refundable.</li>
                          <li className="mt-1">You will be responsible for delivering the items to the pickup point, the pickup point will be determined by BOG Limited.</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <p className="fw-600 fs-700">BOG Limited will not initiate refund/replacement for:</p>
                        <ul className="pb-2 list-disc pl-5 lg:pl-10 lg:w-8/12">
                          <li>Any product that exhibits physical damage to the box, packaging, tags or to the product.</li>
                          <li className="mt-1">Any product that is returned without all original packaging and accessories, including the retail box, manuals, cables, and all other items originally included with the product at the time of delivery.</li>
                          <li className="mt-1">Any product without a valid, readable, untampered serial number, including but not limited to products with missing, damaged, altered, or otherwise unreadable serial number.</li>
                          <li className="mt-1">If you receive a refund, the cost of return shipping will be deducted from your refund.</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <p className="fw-600 fs-700">How do I return my order?</p>
                        <p className="py-3">
                          Kindly send a request to support@bog.com. After confirming your return request, Our team will respond to your request and guide you to the next pickup point.
                          Once we receive your item, we will inspect it, and If your return is approved, we will initiate a refund to your account.
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="fw-600 fs-700">Cancellation Policy</p>
                        <p className="py-3">
                          You can only cancel your order when the order is still in processing status. Only cancellation request made by the means of sending a request to support@bog.com will be acknowledged. We do not acknowledge any cancellation requests by other means , i.e. through call.
                        </p>
                        <p>
                          If the cancellation request of your order is before your order has been shipped or transported, BOG Nigeria Limited will effect a refund. Generally, refund takes between 3 to 30 business days depending on the mode of payment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}