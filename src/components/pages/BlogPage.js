import React from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

export default function BlogPage() {
  return (
    <div>
      <div className="font-primary">
        <Header />
        <div className="section">
          <div className="box">
            <div className="lg:flex lg:mt-5">
              <div className="lg:w-2/12 pr-4 hidden lg:block">
                <p className="fw-600 mt-12 bg-primary pl-2 text-white">Related News</p>
                <div className="mt-10">
                     <p className="fs-400 fw-600">Top 10 In Demand Construction Jobs </p>
                    <p className="my-3 fs-300">Construction, by nature, is a cyclical business, and the decade beginning with 2020 has... </p>
                </div>
                <div className="mt-6">
                     <p className="fs-400 fw-600">Top 10 In Demand Construction Jobs </p>
                    <p className="my-3 fs-300">Construction, by nature, is a cyclical business, and the decade beginning with 2020 has... </p>
                </div>
              </div>
              <div className="lg:w-8/12 lg:px-10 ">
                <div>
                  <p className="fw-800 text-xl lg:text-3xl">
                    6 Ways to Improve Machine Operators’ Safety on Construction{" "}
                  </p>
                  <div className="lg:flex my-5">
                    <p>Green Mouse</p>
                    <p>@greenmouse | 10:45 PM March 8,2023</p>
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/blog2.png")}
                      alt="blog1"
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="mt-6 lg:mt-12">
                    <p>
                      Irure consequat consequat id quis do. Cupidatat deserunt
                      voluptate minim commodo eu pariatur nostrud proident.
                      Irure labore veniam in consectetur. Laborum elit proident
                      sunt exercitation consectetur elit sint fugiat
                      exercitation eu sunt officia magna officia. Non quis
                      pariatur anim occaecat laboris. Lorem consequat qui
                      adipisicing proident esse. Proident et officia sit id
                      dolor id culpa voluptate ullamco est aliquip eiusmod. Sit
                      ipsum ea aute officia ut fugiat non veniam reprehenderit
                      sit fugiat nulla culpa minim. Anim adipisicing pariatur
                      tempor nisi occaecat ipsum reprehenderit commodo enim
                      culpa ea irure.
                    </p>
                    <p className="mt-5">
                      Irure consequat consequat id quis do. Cupidatat deserunt
                      voluptate minim commodo eu pariatur nostrud proident.
                      Irure labore veniam in consectetur. Laborum elit proident
                      sunt exercitation consectetur elit sint fugiat
                      exercitation eu sunt officia magna officia. Non quis
                      pariatur anim occaecat laboris. Lorem consequat qui
                      adipisicing proident esse. Proident et officia sit id
                      dolor id culpa voluptate ullamco est aliquip eiusmod. Sit
                      ipsum ea aute officia ut fugiat non veniam reprehenderit
                      sit fugiat nulla culpa minim. Anim adipisicing pariatur
                      tempor nisi occaecat ipsum reprehenderit commodo enim
                      culpa ea irure.
                    </p>
                    <p className="mt-5">
                      Irure consequat consequat id quis do. Cupidatat deserunt
                      voluptate minim commodo eu pariatur nostrud proident.
                      Irure labore veniam in consectetur. Laborum elit proident
                      sunt exercitation consectetur elit sint fugiat
                      exercitation eu sunt officia magna officia. Non quis
                      pariatur anim occaecat laboris. Lorem consequat qui
                      adipisicing proident esse. Proident et officia sit id
                      dolor id culpa voluptate ullamco est aliquip eiusmod. Sit
                      ipsum ea aute officia ut fugiat non veniam reprehenderit
                      sit fugiat nulla culpa minim. Anim adipisicing pariatur
                      tempor nisi occaecat ipsum reprehenderit commodo enim
                      culpa ea irure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/12"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
