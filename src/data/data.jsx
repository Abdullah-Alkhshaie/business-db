import { BsCurrencyDollar, BsWallet } from "react-icons/bs";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";

export const BoxMonth = {
  icon: <BsCurrencyDollar />,
  title: "Month Total ",
  number: "25410",
  dataKey: "month",
  percentage: 0.5,
};

export const BoxOrder = {
  icon: <MdOutlineCheckBoxOutlineBlank />,
  title: "Orders",
  number: "208",
  dataKey: "orders",
  percentage: 0.2,
};
export const BoxRevenue = {
  icon: <BsWallet />,
  title: " Revenue",
  number: "1352",
  dataKey: "revenue",
  percentage: -12,
};
export const BoxApproved = {
  icon: <IoIosCheckboxOutline />,
  title: "Aproved",
  number: "36",
  dataKey: "approved",
  percentage: 3.5,
};

export const userData = {
  labels: ["New", "Returning", "Inactive"],
  datasets: [
    {
      label: "Users",
      data: [57, 31, 12],
      backgroundColor: ["#43b430", "#ffbc11", "#f3f3f3"],
      number: 4890,

      hoverOffset: 4,
    },
  ],
};

export const subData = {
  labels: ["Paid", "Trail"],
  datasets: [
    {
      label: "Subscriptions",
      data: [71, 29],

      backgroundColor: ["#4578f9", "#cb3eff"],
      number: 1223,
      hoverOffset: 4,
    },
  ],
};

export const lineData = [
  {
    label: "Feb",
    revenue: 234,
    cost: 134,
  },
  {
    label: "Feb",
    revenue: 334,
    cost: 134,
  },
  {
    label: "Feb",
    revenue: 134,
    cost: 134,
  },
  {
    label: "Feb",
    revenue: 34,
    cost: 134,
  },
  {
    label: "Feb",
    revenue: 334,
    cost: 134,
  },
  {
    label: "Feb",
    revenue: 534,
    cost: 134,
  },
  {
    label: "Feb",
    revenue: 234,
    cost: 234,
  },
  {
    label: "Feb",
    revenue: 334,
    cost: 34,
  },
  {
    label: "Feb",
    revenue: 434,
    cost: 134,
  },
  {
    label: "Feb",
    revenue: 234,
    cost: 134,
  },
];
