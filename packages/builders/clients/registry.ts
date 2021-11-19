import axios from "axios";

export const registry = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api"
      : "https://mf-framework-registry.vercel.app/api",
});
