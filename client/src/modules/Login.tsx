"use client";
import React, { useContext, useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../helpers/server";
import toast from "react-hot-toast";
import { userContex } from "../context/userContex.ts";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated} = useContext(
    userContex
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${backendUrl}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      localStorage.setItem("JopPortal-Auth_Token", data.token);
      toast.success(data.message, {
        position: "top-center",
      });
      navigate("/jobs");
    } catch (error:any) {
      toast.error(error.response.message, {
        position: "top-center",
      });
    }
  };

 
   
  if(isAuthenticated === true) {
    navigate("/jobs");
  }

  return (
    <div
      className="bg-gray-700 flex items-center
     justify-center w-full flex-col px-4"
    >
      <div
        className="max-w-md w-full mx-auto 
       ml-6 mr-6 rounded-2xl p-4 md:p-8 shadow-input
        bg-white dark:bg-black z-20 mt-16 mb-16"
      >
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome back to Jobs4Freshers
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to Jobs4Freshers for finding your dream jobs
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="flex flex-row justify-between">
              <Link to={"/forgot-password"} className="text-red-500">
                {" "}
                Forgot Password
              </Link>
              <Link to={"/register"} className="text-green-500">
                {" "}
                Don't have an account
              </Link>
            </div>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Login;
