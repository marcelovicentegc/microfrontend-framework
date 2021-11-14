import { Router } from "express";

let routerInstance: Router | null = null;

export const router = (() => {
  if (routerInstance) {
    console.log("Using initialized router instance");
    return routerInstance;
  }

  routerInstance = Router();

  console.log("Initialized router instance");

  return routerInstance;
})();
