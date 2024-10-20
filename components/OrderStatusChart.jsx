import { OrdersData } from '@/lib/data'
import React from 'react'
import { Pie } from 'react-chartjs-2'

const OrderStatusChart = () => {
  return (
    <><Pie options={{}} data={OrdersData} /></>
  )
}

export default OrderStatusChart