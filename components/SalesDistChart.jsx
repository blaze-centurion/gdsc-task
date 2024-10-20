import { SaleDisData, saleDistOptions } from '@/lib/data'
import React from 'react'
import { Line } from 'react-chartjs-2'

const SalesDistChart = () => {
  return (
    <>
    
    <Line options={saleDistOptions} data={SaleDisData} />
    </>
  )
}

export default SalesDistChart