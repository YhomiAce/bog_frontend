import React from "react";
import ReactApexChart from "react-apexcharts";

  
export default function ProjectChart() {

    const series = [
        {
          name: "Project",
          data: [1, 2, 5, 3, 2, 1, 0, 3]
        }
      ];
    
    const guestOption = {
        stroke: {
            curve: "smooth",
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