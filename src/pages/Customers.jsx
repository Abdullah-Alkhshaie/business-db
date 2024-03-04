import TabelGird from "../components/TabelGird";
import avatar from "../data/images/avatar.jpg";
import { Avatar } from "@mui/material";

const rows = [
  {
    id: 1,
    name: "John Doe",
    image: avatar,
    location: "New York",
    date: "2023-11-21",
    status: "Delivered",
    price: "$100",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: avatar,
    location: "Los Angeles",
    date: "2023-12-05",
    status: "Processing",
    price: "$50",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: avatar,
    location: "Chicago",
    date: "2024-01-10",
    status: "Canceled",
    price: "$75",
  },
  {
    id: 4,
    name: "Alice White",
    image: avatar,
    location: "Seattle",
    date: "2024-02-15",
    status: "Canceled",
    price: "$80",
  },
  {
    id: 5,
    name: "David Miller",
    image: avatar,
    location: "Miami",
    date: "2023-10-28",
    status: "Delivered",
    price: "$60",
  },
  {
    id: 6,
    name: "Emily Jones",
    image: avatar,
    location: "Houston",
    date: "2023-11-12",
    status: "Processing",
    price: "$90",
  },
  {
    id: 7,
    name: "Robert Johnson",
    image: avatar,
    location: "Phoenix",
    date: "2024-01-25",
    status: "Delivered",
    price: "$40",
  },
  {
    id: 8,
    name: "Sarah Garcia",
    image: avatar,
    location: "San Antonio",
    date: "2024-02-08",
    status: "Canceled",
    price: "$120",
  },
  {
    id: 9,
    name: "Matthew Davis",
    image: avatar,
    location: "San Diego",
    date: "2023-12-19",
    status: "Delivered",
    price: "$110",
  },
  {
    id: 10,
    name: "Jennifer Hernandez",
    image: avatar,
    location: "Dallas",
    date: "2024-01-31",
    status: "Processing",
    price: "$85",
  },
  {
    id: 11,
    name: "Matthew Davis",
    image: avatar,
    location: "San Diego",
    date: "2023-12-19",
    status: "Delivered",
    price: "$110",
  },
  {
    id: 12,
    name: "Jennifer Hernandez",
    image: avatar,
    location: "Dallas",
    date: "2024-01-31",
    status: "Processing",
    price: "$85",
  },
];

const columns = [
  {
    field: "name",
    headerName: "Profile",
    width: 180,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt={params.row.name} src={params.row.image} sx={{ mr: 2 }} />
        {params.row.name}
      </div>
    ),
  },
  { field: "location", headerName: "Adress", width: 140 },
  { field: "date", headerName: "Date", width: 160 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
  },
  { field: "price", headerName: "Price", width: 120, type: "number" },
];

function Customers() {
  return (
    <div className=" md:mx-6 mx-2 p-6 bg-white rounded-lg ">
      <div className="flex justify-between mb-5">
        <h1 className="font-bold  text-lg">Customer Order</h1>
      </div>
      <TabelGird rows={rows} columns={columns} />{" "}
    </div>
  );
}

export default Customers;
