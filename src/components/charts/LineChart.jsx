import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";

function LineChart() {
  const [selectedYear, setSelectedYear] = useState(2021);

  useEffect(() => {
    Chart.register(...registerables);
  }, []);

  const formatTick = (tickValue) => {
    const numberValue = parseInt(tickValue.toString());

    return (
      numberValue.toLocaleString("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }) + "k"
    );
  };
  const handleSelectedYear = (e) => {
    setSelectedYear(e.target.value);
  };
  const yearData = {
    2021: [400, 300, 400, 332, 534, 476, 423, 534, 600, 433, 534, 423],
    2022: [350, 250, 350, 282, 484, 326, 373, 484, 550, 383, 484, 173],
    2023: [100, 200, 300, 232, 434, 276, 273, 384, 450, 283, 384, 573],
    2024: [200, 300, 100, 332, 534, 376, 423, 534, 600, 433, 234, 423],
  };

  const yearColor = {
    2021: "#43b430",
    2022: "#ffbc11",
    2023: "#4578f9",
    2024: "#cb3eff",
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold  text-lg">Sales dynamics</h1>
        <select
          value={selectedYear}
          className="font-bold text-lg"
          onChange={handleSelectedYear}
        >
          {Object.keys(yearData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Line
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
                label: selectedYear && selectedYear,
                data: selectedYear && yearData[selectedYear],
                backgroundColor: selectedYear && yearColor[selectedYear],
                borderColor: selectedYear && yearColor[selectedYear],
                pointRadius: 0,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
                intersect: false,
              },
            },
            elements: {
              line: {
                tension: 0.5,
              },
            },
            scales: {
              x: {
                display: true,
                grid: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  callback: formatTick,
                },
                display: true,
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

export default LineChart;
