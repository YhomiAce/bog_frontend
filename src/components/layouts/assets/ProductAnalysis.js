import React from 'react'
import ReactApexChart from 'react-apexcharts';

export const ProductAnalysis = ({reviewProduct, approvedProduct, disapprovedProduct}) => {

    const options = { labels: ["Approved", "In Review","Disapproved"],
        responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 320
          },
          legend: {
            position: 'bottom',
            fontSize: '16px',
          }
        }
      }], yaxis: {
        labels: {
          formatter: (value) => {
            return value.toFixed(0)
          },
        }
      }, };
    const series = [approvedProduct.length, reviewProduct.length, disapprovedProduct.length,]; //our data
  return (
    <div>
         <div>
          <ReactApexChart type="polarArea" series={series} options={options} width="100%" height={300}/>
        </div>
    </div>
  )
}
