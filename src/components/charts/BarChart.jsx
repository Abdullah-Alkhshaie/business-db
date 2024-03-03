import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

function BarChart() {
  const [selectedYear, setSelectedYear] =
    (useState < "2021") | "2022" | ("2023" > "2021");

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

  const yearData = {
    2021: [400, 300, 400, 332, 534, 476, 423, 534, 600, 433, 534, 423],
    2022: [350, 250, 350, 282, 484, 326, 373, 484, 550, 383, 484, 173],
    2023: [100, 200, 300, 232, 434, 276, 273, 384, 450, 283, 384, 573],
  };

  const filteredData = yearData[selectedYear] || []; // Optional chaining for safer access

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Sales dynamics</h1>
        <ul>
          <li
            className={`${
              selectedYear === "2021" ? "active" : ""
            } font-bold text-lg`}
            onClick={() => setSelectedYear("2021")}
          >
            2021
          </li>
          <li
            className={`${
              selectedYear === "2022" ? "active" : ""
            } font-bold text-lg`}
            onClick={() => setSelectedYear("2022")}
          >
            2022
          </li>
          <li
            className={`${
              selectedYear === "2023" ? "active" : ""
            } font-bold text-lg`}
            onClick={() => setSelectedYear("2023")}
          >
            2023
          </li>
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
                label: `Year ${selectedYear}`, // Dynamic label based on selected year
                data: filteredData,
                backgroundColor: [selectedYear],
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
                  callback: formatTick, // Use the custom formatting function
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
