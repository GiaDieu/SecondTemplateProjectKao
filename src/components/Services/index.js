import React from "react";
import { InfoSection, Pricing } from "../../components/";

import { homeObjectFourth } from "./ServicesData";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjectFourth} />
    </>
  );
};

export default Services;
