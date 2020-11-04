import React from "react";
import { InfoSection, Pricing } from "../../components/";

import {
  homeObjectTwo,
  homeObjectThree,
  homeObjectFourth,
} from "./ProductsData";

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <Pricing />
      <InfoSection {...homeObjectFourth} />
    </>
  );
};

export default Products;
