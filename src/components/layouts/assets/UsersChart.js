import React from "react";
import ReactApexChart from "react-apexcharts";

export default function UsersChart() {
    
    const options = { labels: ["Completed", "Ongoing", "Cancelled"],responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    }] };
const series = [20, 6, 3,]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="donut" width="100%" />
  </div>
);
  }

export  function ProjectChart() {
    
    const options = { labels: ["Completed", "Ongoing", "Cancelled"],responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    }] };
const series = [20, 6, 3,]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="pie" width="100%" />
  </div>
);
  }