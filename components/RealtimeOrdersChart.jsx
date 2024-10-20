'use client'

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { io } from "socket.io-client";

const RealtimeOrdersChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "New Orders",
        data: [],
        borderColor: "#fe7a58",
        backgroundColor: "rgba(254, 122, 88, 0.3)",
      },
    ],
  });
  const maxDataPoints = 20;
  const socket = io('https://data.gdscnsut.com');

  useEffect(() => {
    socket.on('random_number', (newValue) => {
        
        setData(prev => {
            const newLabels = [...prev.labels, new Date().toLocaleTimeString()];
            const newData = [...prev.datasets[0].data, newValue.number];

            if (newLabels.length > maxDataPoints) {
                newLabels.shift();
                newData.shift();
            }

            return {
                labels: newLabels,
                datasets: [
                    {
                       ...prev.datasets[0],
                        data: newData,
                    },
                ],
            }
      
        })
    })

    return () => socket.off('random_number'); // Cleanup on unmount
  }, []);
  return (
    <>
      <Line data={data} />
    </>
  );
};

export default RealtimeOrdersChart;
