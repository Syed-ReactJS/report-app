import axios from "axios";

export const authRequest = axios.create({
  baseURL: "https://rtpcrreport-dcmc.onrender.com/api/auth/",
});
export const privateRequest = axios.create({
  baseURL: "https://rtpcrreport-dcmc.onrender.com/api/dashboard/",
  headers: { authorization: `Bearer ${localStorage.getItem("auth-token")}` },
});
