import axios from "axios";

const MAX = 100000000;

export const builder = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api"
      : "https://mf-framework-builders.vercel.app/api",
  maxContentLength: MAX,
  maxBodyLength: MAX,
});
