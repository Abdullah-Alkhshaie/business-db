import { useEffect } from "react";
import { useStateContext } from "../context/contextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import avatar from "../data/images/avatar.jpg";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const getNavbarTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Analytics";
      case "/products":
        return "Products";
      case "/customers":
        return "Customers";
      default:
        return "Analytics"; // Default for other routes
    }
  };

  return (
    <div className="flex justify-between md:mx-6 p-2 relative">
      <div className="flex items-center gap-4 ">
        {activeMenu === false && (
          <button type="button" onClick={() => setActiveMenu((prev) => !prev)}>
            <AiOutlineMenu
              size={25}
              className="text-blue-500 md:hidden hover:scale-125   duration-300"
            />
          </button>
        )}
        <div>
          <h1 className="text-gray-500 font-bold ml-1 text-14">
            {getNavbarTitle(pathname)}
          </h1>
        </div>
      </div>
      <div
        className="flex gap-2 cursor-pointer items-center rounded-lg "
        // onClick={() => handleCilck("userprofile")}
      >
        <img src={avatar} className="rounded-full w-8 h-8" alt="" />
        <p>
          <span className="text-gray-400 text-14">Hi, </span>{" "}
          <span className="text-gray-500 font-bold ml-1 text-14">Abdullah</span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
