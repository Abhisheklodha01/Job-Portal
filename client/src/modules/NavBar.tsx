import { Link } from "react-router-dom";
import { userContex } from "../context/userContex";
import { useContext } from "react";
import toast from "react-hot-toast";

export const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(userContex);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false)
    toast.success("Logout successdully", {
      position: "top-center",
    });
  };

  return (
    <div className="bg-gray-600 p-4 flex justify-between items-center flex-row ">
      <Link to="/" className="text-gray-100 text-xl z-20">
        {" "}
        Job4You
      </Link>
      <div className="flex justify-between items-center flex-row text-gray-100 text-lg">
        <Link to={"/jobs"} className="mr-4">
          <button className="px-6 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Jobs</span>
          </button>
        </Link>
        <div>
          {isAuthenticated === true ? (
            <button onClick={handleLogout}>
              <button className="px-6 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">Logout</span>
              </button>
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="px-6 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">Login</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
