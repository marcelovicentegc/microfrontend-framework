import type { NextPage } from "next";
import { Home } from "../components/Home";

const AnotherPage: NextPage = () => {
  return <Home page={"another-page"} />;
};

export default AnotherPage;
