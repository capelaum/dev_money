import axios from "axios";

// Change to https://localhost:3000/api to run locally

export const api = axios.create({
  baseURL: "https://dev-money.vercel.app/api",
});
