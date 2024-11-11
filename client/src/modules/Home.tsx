import { Link } from "react-router-dom";
import { BackgroundLines } from "../components/ui/background-lines";
import { Button } from "../components/ui/moving-border";
import { useContext } from "react";
import { userContex } from "../context/userContex";

function Home() {
  const { isAuthenticated } = useContext(userContex);
  return (
    <BackgroundLines
      className="bg-gray-900 min-h-screen flex items-center 
    justify-center w-full flex-col px-4"
    >
      <h2
        className="bg-clip-text text-transparent text-center
       bg-gradient-to-b from-neutral-900 to-neutral-700
        dark:from-neutral-600 dark:to-white text-2xl
         md:text-4xl lg:text-7xl font-sans py-2 md:py-10 
         relative z-20 font-bold tracking-tight"
      >
        Find your dream job with us
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg
       text-neutral-700 dark:text-neutral-400 text-center"
      >
        Get the best jobs match from our website, according to your interest,
        expreience, skills and education, totally free.
      </p>
      <Link
        to={isAuthenticated === true ? "/jobs" : "/register"}
        className="mt-5"
      >
        <Button
          borderRadius="1.75rem"
          className="bg-gray-600 dark:bg-slate-900 text-white
           dark:text-white border-neutral-800 dark:border-slate-500"
        >
          Get Started &rarr;
        </Button>
      </Link>
    </BackgroundLines>
  );
}

export default Home;
