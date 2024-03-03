import { Chart, ArcElement, defaults } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement); // Register the ArcElement for Chart.js

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const customOptions = {
  plugins: {
    legend: {
      position: "left",
      labels: {
        fontColor: "#333333",
        fontSize: 14,
        padding: 10,
        boxWidth: 15,
      },
    },
  },
};

function PieChart({ data }) {
  return (
    <div>
      <div>
        <h1 className="font-bold text-lg">{data.datasets[0].label}</h1>
        <p className="font-bold text-3xl my-1">{data.datasets[0].number}</p>
        <p className="text-gray-200  text- text-[12px]">since last month</p>
      </div>
      <div className="">
        <div style={{ width: "250px", height: "250px" }}>
          <Doughnut data={data} options={customOptions || {}} />
        </div>
      </div>
    </div>
  );
}

export default PieChart;
