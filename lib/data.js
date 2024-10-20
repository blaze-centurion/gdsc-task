export const TotalSalesData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Online Sales",
      data: [50, 20, 40, 60, 25, 70, 90, 50, 45, 30, 20, 90],
      backgroundColor: "#5244cf",
      barThickness: 10,
      borderRadius: 10,
    },
    {
      label: "Offline Sales",
      data: [40, 50, 10, 20, 40, 30, 20, 70, 30, 30, 10, 20],
      backgroundColor: "#fe7a58",
      barThickness: 10,
      borderRadius: 10,
    },
  ],
};

export const SaleDisData = {
  labels: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],
  datasets: [
    {
      label: "Sales Distribution for October",
      data: [
        45, 132, 89, 175, 62, 114, 27, 199, 73, 158, 33, 88, 101, 46, 120, 66,
        150, 12, 83, 170, 37, 94, 156, 25, 141, 77, 115, 39, 167, 54,
      ],
      borderColor: "#5244cf",
      backgroundColor: "rgba(82, 68, 207, 0.3)",
    },
  ],
};

export const CustomersData = {
  labels: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],
  datasets: [
    {
      label: "New Customer arrived in October",
      data: [
        50, 120, 89, 175, 62, 114, 27, 199, 73, 158, 33, 88, 101, 46, 120, 66,
        150, 12, 83, 170, 37, 94, 156, 25, 141, 77, 115, 39, 167, 54,
      ],
      backgroundColor: "#5244cf",
      borderRadius: 10,
    },
    {
      label: "Customer left in October",
      data: [
        45, 132, 78, 19, 156, 83, 197, 23, 141, 89, 34, 65, 112, 174, 21, 95,
        161, 48, 173, 37, 110, 140, 200, 87, 55, 29, 118, 72, 164, 99,
      ],
      backgroundColor: "#fe7a58",
      borderRadius: 10,
    },
  ],
};

export const OrdersData = {
  labels: ["Delivered", "Out for delivery", "Shipped", "Pending"],
  datasets: [
    {
      label: "Order Status",
      data: [9000, 1200, 1000, 4200],
      backgroundColor: ["#5244cf", "#fe7a58", "#febd32", "#4379F2"],
    },
  ],
};

export const totalSaleOptions = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: function (value, index, ticks) {
          return value + "K";
        },
      },
    },
  },
};

export const saleDistOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        callback: function (value, index, ticks) {
          if (value == 0) return value;
          return value + "Oct";
        },
      },
      min: 1,
      suggestedMin: 1,
    },
  },

  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y * 100);
          }
          return label;
        },

        title: (tooltipItems) => {
          return `${tooltipItems[0].label} Oct`;
        },
      },
    },
  },
};

export const customerDistOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        callback: function (value, index, ticks) {
          if (value == 0) return value;
          return value + "Oct";
        },
      },
      min: 1,
      suggestedMin: 1,
    },
  },

  plugins: {
    tooltip: {
      callbacks: {
        title: (tooltipItems) => {
          return `${tooltipItems[0].label} Oct`;
        },
      },
    },
  },
};
