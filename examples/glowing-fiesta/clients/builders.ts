import axios from "axios";

const MAX = 100000000;

export const builders = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api"
      : "https://mf-framework-builders.vercel.app/api",
  maxContentLength: MAX,
  maxBodyLength: MAX,
});
