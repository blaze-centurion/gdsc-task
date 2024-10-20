import { totalSaleOptions, TotalSalesData } from "@/lib/data";
import React from "react";
import { Bar } from "react-chartjs-2";

const TotalSalesChart = () => {
  return (
    <>
      <Bar options={totalSaleOptions} data={TotalSalesData} />
    </>
  );
};

export default TotalSalesChart;
