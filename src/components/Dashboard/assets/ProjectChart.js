import React from "react";
import ReactApexChart from "react-apexcharts";

  
export default function ProjectChart() {

    const series = [
        {
          name: "Projects",
          data: [3, 6, 7, 6, 9, 4, 2, 6]
        },
        {
          name: "ongoing",
          data: [1, 2, 5, 3, 2, 1, 0, 3]
        },
        {
          name: "completed",
          data: [0, 1, 4, 4, 3, 1, 1, 1]
        }
      ];
    
    const guestOption = {
        stroke: {
            curve: "smooth",
            width: 5,
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug"]
          }
      };
      return (
        <div>
          <ReactApexChart type="line" series={series} options={guestOption} width="100%" height="300px" />
        </div>
      );
}