import BarChart from "../components/charts/BarChart";
import Box from "../components/charts/Box";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import {
  BoxApproved,
  BoxMonth,
  BoxOrder,
  BoxRevenue,
  subData,
  userData,
} from "../data/data";

function Analystics() {
  return (
    <div className="grid gap-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 auto-rows-[minmax(180px, auto)] grid-flow-dense ml-3 md:mx-6 p-2 ">
      <div className="bg-white p-[20px] rounded-[10px] border-[2px] border-solid border-gray-200 md:col-span-1 row-span-4">
        <Box {...BoxOrder} />
      </div>
      <div className="bg-white p-[20px] rounded-[10px] border-[2px] border-solid border-gray-200 md:col-span-1 row-span-4">
        <Box {...BoxApproved} />
      </div>
      <div className="bg-white p-[20px] rounded-[10px] border-[2px] border-solid border-gray-200 md:col-span-1 row-span-8">
        <PieChart data={userData} />
      </div>
      <div className="bg-white p-[20px] rounded-[10px] border-[2px] border-solid border-gray-200 md:col-span-1 row-span-8">
        <PieChart data={subData} />
      </div>
      <div className="bg-white p-[20px] rounded-[10px] border-[2px] border-solid border-gray-200 md:col-span-1 row-span-4">
        <Box {...BoxMonth} />
      </div>
      <div className="bg-white p-[20px] rounded-[10px] border-[2px] border-solid border-gray-200 md:col-span-1 row-span-4">
        <Box {...BoxRevenue} />
      </div>
      <div className="bg-white p-[20px] rounded-[10px] border-[2px] border-solid border-gray-200 md:col-span-2 row-span-8">
        <BarChart />
      </div>
      <div className="bg-white p-[20px] rounded-[10px] border-[2px] border-solid border-gray-200 md:col-span-2 row-span-8">
        <LineChart />
      </div>
    </div>
  );
}

export default Analystics;
