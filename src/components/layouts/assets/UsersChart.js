import React from "react";
import ReactApexChart from "react-apexcharts";

export default function UsersChart({completedOrder, ongoingOrder, cancelledOrder, pendingOrder}) {
    
    const options = { labels: ["Completed", "Ongoing","Pending", "Cancelled"],responsive: [{
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
  const series = [completedOrder.length, ongoingOrder.length, pendingOrder.length, cancelledOrder.length,]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="donut" width="100%" />
  </div>
);
  }

export  function ProjectChart({completedProjects, ongoingProjects, cancelledProjects, pendingProjects}) {
    
    const options = { labels: ["Completed", "Ongoing","Pending", "Cancelled"],responsive: [{
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
  const series = [completedProjects.length, ongoingProjects.length, pendingProjects.length, cancelledProjects.length,]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="pie" width="100%" />
  </div>
);
  }