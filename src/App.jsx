import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Analystics from "./pages/Analystics";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Calendar from "./pages/Calendar";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Navbar from "./components/Navbar";
import { useStateContext } from "./context/contextProvider";
import { Chart, registerables } from "chart.js";
import { useEffect } from "react";

function App() {
  const { activeMenu } = useStateContext();

  useEffect(() => {
    // Register required elements and scales
    Chart.register(...registerables);
  }, []);

  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <div className="flex relative ">
          {activeMenu ? (
            <div className=" w-72 shadow-lg  fixed lg:relative  z-20  sidebar  bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 over overflow-hidden">
              <Sidebar />
            </div>
          )}

          <div className={` min-h-screen w-full`}>
            <div className=" bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div className="mt-16 md:mt-5">
              <Routes>
                <Route path="/business-db" element={<Analystics />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
