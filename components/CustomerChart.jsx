import { customerDistOptions, CustomersData } from '@/lib/data'
import React from 'react'
import { Bar } from 'react-chartjs-2'

const CustomerChart = () => {
  return (
    <>
                <Bar options={customerDistOptions} data={CustomersData} />
                </>
  )
}

export default CustomerChart