import axios from "axios";

export const registry = axios.create({
  baseURL: "http://localhost:3005",
});
