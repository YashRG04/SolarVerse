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
        categories: [1, 5, 10, 15, 20, 25],
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
        data: [50000, 45999, 55000, 52000, 42999, 40000],
      },
      {
        name: "Total Cummulative Earning",
        data: [5000, 4999, 15000, 52000, 46999, 52000],
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
