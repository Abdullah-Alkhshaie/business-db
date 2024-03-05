import { CiCalendar } from "react-icons/ci";
import { IoMdAnalytics } from "react-icons/io";
import {
  MdDashboardCustomize,
  MdOutlineCalendarViewWeek,
  MdOutlineCancel,
} from "react-icons/md";
import { PiSignIn, PiSignOut } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
// import man from "../data/images/man.png";

const links = [
  {
    title: "Analytics",
    icon: <IoMdAnalytics />,
    path: "/business-db",
  },
  {
    title: "Products",
    icon: <MdOutlineCalendarViewWeek />,
    path: "/products",
  },
  {
    title: "Customers",
    icon: <MdDashboardCustomize />,
    path: "/customers",
  },
  {
    title: "Calendar",
    icon: <CiCalendar />,
    path: "/calendar",
  },
];

function Sidebar() {
  const singIn = true;

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="ml-3 md:mx-6 p-2  h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="relative">
            <Link to="/business-db" onClick={handleCloseSideBar}>
              <h1 className="font-smibold px-2 text-2xl text-blue-500 cursor-pointer  ">
                Business
              </h1>
            </Link>
            <button
              className="absolute top-0 right-0 text-lg mt-2 hover:scale-125 lg:hidden  duration-300"
              type="button"
              onClick={() => setActiveMenu((prev) => !prev)}
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10 border-b  ">
            {links.map((link, i) => (
              <NavLink key={i} to={link.path} onClick={handleCloseSideBar}>
                <div className="flex items-center my-3 gap-2 cursor-pointer hover:bg-gray-200 px-2 py-1 duration-300 rounded-md">
                  {link.icon}
                  <h2 className="">{link.title}</h2>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="mt-10">
            {singIn ? (
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 duration-300 px-2 py-1 rounded-md">
                <PiSignOut />
                <p>Sing Out</p>
              </div>
            ) : (
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 duration-300 px-2 py-1 rounded-md">
                <PiSignIn />
                <p>Sing In</p>
              </div>
            )}
          </div>
        </>
      )}
      {/* <div className="mt-20 relative  flex rounded-md  ">
        <img src={man} alt="man" className="z-10 -ml-[70px] " />
        <div className=" bg-gray-200 h-32 rounded-md absolute bottom-0  w-full">
          <p className=" flex justify-center ml-3 lg:ml-10  mt-4  text-center ">
            Need help <br />
            feel free to contact
          </p>
          <button className="ml-10 lg: xl:ml-20 mt-2 bg-blue-400 rounded-md px-2 hover:bg-blue-500 duration-300  text-white">
            Get support
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
