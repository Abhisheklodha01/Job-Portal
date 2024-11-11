import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./modules/Signup";
import { NavBar } from "./modules/NavBar";
import { Footer } from "./modules/Footer";
import Login from "./modules/Login";
import Home from "./modules/Home";
import Jobs from "./modules/Jobs";
import ForgotPassword from "./modules/Forgot-Password";
import Contex, { userContex } from "./context/userContex.ts";
import { useContext, useEffect} from "react";

function App() {
  const { isAuthenticated, setUser, setIsAuthenticated } = useContext(
    userContex
  );
  const CheckUserIsAuthenticatedOrNot = async () => {
    try {
      const response = await Contex();
      setIsAuthenticated(true);
      setUser(response?.data.user);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    CheckUserIsAuthenticatedOrNot();
  }, [isAuthenticated]);
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
