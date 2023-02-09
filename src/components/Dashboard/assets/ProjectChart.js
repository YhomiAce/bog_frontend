import React from "react";
import ReactApexChart from "react-apexcharts";

  
export default function ProjectChart() {

    const series = [
        {
          name: "Pending",
          data: [3, 6, 7, 6, 9, 4, 2, 6]
        },
        {
          name: "Ongoing",
          data: [1, 2, 5, 3, 2, 1, 0, 3]
        },
        {
          name: "Completed",
          data: [0, 1, 4, 4, 3, 1, 1, 1]
        }
      ];
    
    const guestOption = {
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0.1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 80, 100]
          }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug"]
          }
      };
      return (
        <div>
          <ReactApexChart type="area" series={series} options={guestOption} width="100%" height="300px" />
        </div>
      );
}