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
          <ReactApexChart type="area" series={series} options={guestOption} width="100%" height={300}/>
        </div>
      );
}

export function AdminChart() {

  const series = [{
    name: 'Clients',
    data: [31, 40, 28, 51, 42, 55, 40, 34, 20, 10]
  }, {
    name: 'Service Partners',
    data: [11, 32, 45, 32, 34, 52, 71, 24, 75, 76]
  }, {
    name: 'Product Partners',
    data: [4, 8, 21, 8, 34, 32, 41, 37, 40, 50]
  }];
  const options = {
    chart: {
      height: 250,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    
  };

  return(
    <div>
      <ReactApexChart type="area" series={series} options={options} width="100%" />
  </div>
  )
}