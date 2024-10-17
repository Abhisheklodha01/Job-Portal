import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-gray-600 p-4 flex justify-between items-center flex-row ">
      <Link to="/" className="text-gray-100 text-xl z-20">
        {" "}
        Job4You
      </Link>
      <div className="hidden md:inline flex justify-between
       items-center flex-row text-gray-100 text-lg z-20 ">
        <Link to={"/jobs"} className="mr-5 cursor-pointer hover:text-amber-500 z-20">
          Jobs
        </Link>
        <Link to={"/"} className="z-20 ml-5 cursor-pointer hover:text-amber-500">About</Link>
      </div>
      <div className="flex justify-between items-center flex-row text-gray-100 text-lg">
        <Link to={"/login"} className="mr-4">
          <button className="px-6 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Login</span>
          </button>
        </Link>
        <Link to={"/register"}>
          <button className="px-6 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Register</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
