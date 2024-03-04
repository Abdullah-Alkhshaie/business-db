import { Avatar } from "@mui/material";
import TabelGird from "../components/TabelGird";
import img from "../data/images/product.jpg";

const rows = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: img,
    category: "Electronics",
    price: "$79.99",
    stock: 20,
  },
  {
    id: 2,
    name: "Running Shoes",
    image: img,
    category: "Sports",
    price: "$54.95",
    stock: 15,
  },
  {
    id: 3,
    name: "Smartwatch",
    image: img,
    category: "Electronics",
    price: "$249.00",
    stock: 5,
  },
  {
    id: 4,
    name: "T-Shirt",
    image: img,
    category: "Clothing",
    price: "$19.99",
    stock: 30,
  },
  {
    id: 5,
    name: "Laptop",
    image: img,
    category: "Electronics",
    price: "$899.99",
    stock: 10,
  },
  {
    id: 6,
    name: "Coffee Maker",
    image: img,
    category: "Kitchen",
    price: "$39.99",
    stock: 25,
  },
  {
    id: 7,
    name: "Gaming Mouse",
    image: img,
    category: "Electronics",
    price: "$49.99",
    stock: 12,
  },
  {
    id: 8,
    name: "Backpack",
    image: img,
    category: "Accessories",
    price: "$69.99",
    stock: 18,
  },
  {
    id: 9,
    name: "Water Bottle",
    image: img,
    category: "Sports",
    price: "$14.99",
    stock: 40,
  },
  {
    id: 10,
    name: "Notebook",
    image: img,
    category: "Office",
    price: "$9.99",
    stock: 50,
  },
];

const columns = [
  {
    field: "name",
    headerName: "Product Name",
    width: 270,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt={params.row.name} src={params.row.image} sx={{ mr: 2 }} />
        {params.row.name}
      </div>
    ),
  },

  {
    field: "category",
    headerName: "Category",
    width: 170,
  },
  {
    field: "price",
    headerName: "Price",
    width: 160,
    type: "number",
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 130,
    type: "number",
  },
];

function Products() {
  return (
    <div className=" md:mx-6 mx-2 p-6 bg-white rounded-lg ">
      <div className="flex justify-between mb-5">
        <h1 className="font-bold  text-lg">Product Order</h1>
      </div>
      <TabelGird rows={rows} columns={columns} />{" "}
    </div>
  );
}

export default Products;
