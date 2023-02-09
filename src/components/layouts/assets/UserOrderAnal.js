import React from 'react'
import ReactApexChart from 'react-apexcharts'

export const UserOrderAnal = ({order}) => {

    const pendingOrder = order.filter(where => where.status === "pending")
    const ongoingOrder = order.filter(where => where.status === "ongoing")
    const completedOrder = order.filter(where => where.status === "completed")
    const returnedOrder = order.filter(where => where.status === "returned")
    const cancelledOrder = order.filter(where => where.status === "cancelled")

    const series = [
        {
          data: [
            {
              x: 'Total Orders',
              y: order.length
            },
            {
              x: 'Pending Orders',
              y: pendingOrder.length
            },
            {
              x: 'Ongoing Orders',
              y: ongoingOrder.length
            },
            {
              x: 'Completed Orders',
              y: completedOrder.length
            },
            {
              x: 'Cancelled Orders',
              y: cancelledOrder.length
            },
            {
              x: 'Returned Orders',
              y: returnedOrder.length
            },
          ]
        }
      ]
      const options = {
        legend: {
          show: false
        },
        chart: {
          height: 350,
          type: 'treemap',
          fontFamily: 'sans-serif'
        },
        title: {
          text: 'My Order Treemap (different color for each cell)',
          align: 'left',
          font: 'sans',
        },
        colors: [
          '#3F79AD',
          '#EC8B20',
          'rgba(166, 0, 86, 0.8)',
          'rgba(114, 0, 113, 0.8)',
          'rgba(0, 94, 95, 0.8)',
          'rgba(79, 35, 0, 0.8)',
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false
          }
        }
      }

  return (
    <div>
        <ReactApexChart className='text-primary' options={options} series={series} type="treemap" height={350} width={'100%'}/>
    </div>
  )
}
