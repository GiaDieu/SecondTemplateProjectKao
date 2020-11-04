import React from "react";
import { InfoSection, Pricing } from "../../components/";

import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
  homeObjectFourth,
} from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <Pricing />
      <InfoSection {...homeObjectFourth} />
    </>
  );
};

export default Home;
