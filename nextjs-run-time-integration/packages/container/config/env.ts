export const LOADER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3002/api"
    : "https://mfe-frameworks-nrti-loader.vercel.app/api";
