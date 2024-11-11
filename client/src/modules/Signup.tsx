"use client";
import React, { useContext, useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { backendUrl } from "../helpers/server";
import { userContex } from "../context/userContex";

function Login() {
  const navigate = useNavigate()
  const {setUser, setIsAuthenticated } = useContext(
    userContex
  );
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${backendUrl}/users/signup`,
        {
          name:fullName,
          email,
          password,
          phoneNumber
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      localStorage.setItem("JobPortal-Auth_Token", data.token);
      toast.success(data.message, {
        position: "top-center",
      });
      setIsAuthenticated(true);
      setUser(data.user);
      navigate("/jobs")
    } catch (error:any) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  return (
    <div className="flex items-center justify-center bg-gray-700">
      <div
        className=" mt-16 max-w-md w-full mx-auto  ml-6 mr-6 rounded-2xl  mb-10 
        p-4 md:p-8 shadow-input bg-white dark:bg-black z-20"
      >
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Jobs4Freshers
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Signup to Jobs4Freshers for finding your dream jobs
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                placeholder="Enter your name"
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </LabelInputContainer>
          </div>
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
          <LabelInputContainer className="mb-4">
            <Label htmlFor="number">Phone number</Label>
            <Input
              id="number"
              placeholder="Phone number"
              type="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
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
            <Link to={"/login"} className="text-green-500">
              Already have an account
            </Link>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
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
