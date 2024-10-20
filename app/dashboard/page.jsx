"use client";

import Card from "@/components/Card";
import MiniCard from "@/components/MiniCard";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PieController,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import dynamic from 'next/dynamic'
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineDollarCircle, AiOutlineStock } from "react-icons/ai";
import { PiUsersThreeBold } from "react-icons/pi";
const TotalSalesChart = dynamic(() => import('@/components/TotalSalesChart'), {
  loading: () => <h1>Loading...</h1>
});
const RealtimeOrdersChart = dynamic(() => import('@/components/RealtimeOrdersChart'), {
  loading: () => <h1>Loading...</h1>
});
const OrderStatusChart = dynamic(() => import('@/components/OrderStatusChart'), {
  loading: () => <h1>Loading...</h1>
});
const CustomerChart = dynamic(() => import('@/components/CustomerChart'), {
  loading: () => <h1>Loading...</h1>
});
const SalesDistChart = dynamic(() => import('@/components/SalesDistChart'), {
  loading: () => <h1>Loading...</h1>
});

Chartjs.register(
  CategoryScale,
  LinearScale,
  PieController,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Legend,
  Title,
  Tooltip
);

const Page = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(true)

  return (
    <>
      <div className="flex">
        <Sidebar  isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} />
        <div className="main-container flex-1 h-[100vh] bg-custom_gray">
          <Topbar setIsSidebarActive={setIsSidebarActive}  />

          <div className="main p-4 h-[calc(100vh-60px)] overflow-auto">
            <h1 className="text-[30px] font-semibold ">Welcome back</h1>
            <p className="text-[#7f7e7e]">Check your last activity today</p>

            <div className="flex flex-wrap gap-2 my-4">
              <MiniCard
                title="Total Orders"
                value="947"
                bg_class="bg-dark_black"
                title_color="text-custom_gray"
                value_color="text-white"
                icon={<FiShoppingCart className="text-white" />}
              />
              <MiniCard
                title="Total Sales"
                value={new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(95000)}
                icon={<AiOutlineDollarCircle />}
              />
              <MiniCard title="Total Customers" value="4570"  icon={<PiUsersThreeBold />} />
              <MiniCard
                title="Average Order Value"
                value={new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(29000)}
                icon={<AiOutlineStock />}
              />
            </div>

            <div className="grid grid-cols-6 gap-3 my-3">
              <Card span="lg:col-span-6 col-span-6" title="New Orders">
                <RealtimeOrdersChart />
              </Card>
              <Card span="lg:col-span-4 col-span-6" title="Total Sales">
                <TotalSalesChart />
              </Card>
              <Card span="lg:col-span-2 md:col-span-3 col-span-6" title="Today Order Status">
                <OrderStatusChart />
              </Card>
              <Card span="lg:col-span-3 md:col-span-3 col-span-6" title="Sales Distribution">
                <SalesDistChart />
              </Card>
              <Card span="lg:col-span-3 col-span-6" title="Customers">
                <CustomerChart />
              </Card>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
