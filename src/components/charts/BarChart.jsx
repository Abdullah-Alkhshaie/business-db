import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

function BarChart() {
  useEffect(() => {
    Chart.register(...registerables);
  }, []);

  const formatTick = (tickValue) => {
    // Accept string or number
    const numberValue = parseInt(tickValue.toString()); // Ensure Number conversion

    return (
      numberValue.toLocaleString("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }) + "k"
    );
  };

  // const yearData = {
  //   2021: [400, 300, 400, 332, 534, 476, 423, 534, 600, 433, 534, 423],
  //   2022: [350, 250, 350, 282, 484, 326, 373, 484, 550, 383, 484, 173],
  //   2023: [100, 200, 300, 232, 434, 276, 273, 384, 450, 283, 384, 573],
  // };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Sales dynamics</h1>
        <ul>
          <li>2021</li>
          <li>2022</li>
          <li>2023</li>
        </ul>
      </div>
      <div>
        <Bar
          data={{
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
                label: `Year `,
                data: [
                  400, 300, 400, 332, 534, 476, 423, 534, 600, 433, 534, 423,
                ],
                backgroundColor: "blue",
                barThickness: 10,
                borderRadius: 10,
                borderWidth: 0,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                type: "category",
                grid: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  callback: formatTick,
                },
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default BarChart;
