import "./BarChart.css";
// import { Bar, Chart } from "test-react-chartjs-2";
import Chart from "react-apexcharts";
import * as zoom from "chartjs-plugin-zoom";
import { useEffect, useState } from "react";

const BarChart = ({ wid }) => {
  const [temp, setTemp] = useState({
    options: {
      chart: {
        id: "basic-bar-chart",
        toolbar: {
          show: false,
        },
      },
      title: {
        text: "XYZ - Cost Analysis (1997 - 2022)",
        align: "left",
        offsetX: 110,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25,
        ],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
        title: {
          text: "Number of Years",
          position: "bottom", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: -10,
          offsetX: 0,
          style: {
            color: "#008FFB",
          },
        },
      },
      yaxis: {
        title: {
          text: "Income (thousand crores)",
          style: {
            color: "#008FFB",
          },
        },
      },
    },
    series: [
      {
        name: "INR/Year",
        data: [
          50000, 55000, 51000, 52999, 45999, 51000, 52000, 51999, 50000, 55000,
          51000, 52999, 45999, 51000, 52000, 51999, 50000, 45000, 41000, 42999,
          45999, 41000, 42000, 41999, 40000,
        ],
      },
      {
        name: "Total Cummulative Earning",
        data: [
          5000, 5500, 5100, 2999, 4999, 1000, 2000, 11999, 10000, 15000, 21000,
          22999, 35999, 41000, 52000, 41999, 50000, 45300, 45900, 46999, 47999,
          48000, 49000, 50999, 52000,
        ],
      },
    ],
  });

  return (
    <div className="App">
      <Chart
        options={temp.options}
        series={temp.series}
        type="area"
        width={wid}
      />
    </div>
  );
};
export default BarChart;
