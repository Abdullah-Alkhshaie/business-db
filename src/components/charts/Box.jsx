import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const Box = (props) => {
  return (
    <div className=" ">
      <div className=" flex justify-between ">
        <span className="font-bold text-lg">{props.title}</span>
        <span>{props.icon}</span>
      </div>
      <h1 className="font-bold text-3xl py-7"> {props.number} </h1>
      <div className="Info">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center gap-1"
            style={{ color: props.percentage > 0 ? "tomato" : "lightgreen" }}
          >
            {props.percentage > 0 ? <FaArrowUpLong /> : <FaArrowDownLong />}
            {props.percentage}%
          </span>
          <span className="text-gray-500  ml-1 text- text-[14px]">
            in this month
          </span>
        </div>
      </div>
    </div>
  );
};

export default Box;
