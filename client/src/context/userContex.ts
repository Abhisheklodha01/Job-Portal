import { createContext } from "react";
import axios from "axios";
import { backendUrl } from "../helpers/server";

const token = localStorage.getItem("JopPortal-Auth_Token");
console.log(token);

export const userContex = createContext<any>({ isAuthenticated: false });

export default function Contex() {
  let response;
  try {
    response = axios.get(`${backendUrl}/users/user-profile`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return response;
}
