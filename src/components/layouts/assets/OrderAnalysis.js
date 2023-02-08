import React from 'react'
import ReactApexChart from 'react-apexcharts';

export const OrderAnalysis = ({ongoingOrders, completedOrders, pendingOrders}) => {

  const options = {
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    // colors: ['#1ab7ea', '#0084ff', '#39539E',],
    labels: ['Completed Orders', 'Ongoing Orders', 'Pending Orders'],
    legend: {
      show: true,
      floating: true,
      fontSize: '14px',
      position: 'left',
      offsetX: 5,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
            show: false
        }
      }
    }]
  }

    const series = [completedOrders.length, ongoingOrders.length, pendingOrders.length,]; //our data
  return (
    <div>
         <div>
          <ReactApexChart type="radialBar" series={series} options={options} width="100%" height={300}/>
        </div>
    </div>
  )
}
