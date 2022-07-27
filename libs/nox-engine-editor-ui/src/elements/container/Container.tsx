import React from "react";
import { basicVariants, styled } from "../theme/Theme";
import * as Stitches from "@stitches/react";

const ContainerStyle = styled("div", {
  display: "block",
  padding: "$m",
}, basicVariants);

type Variants = Stitches.VariantProps<typeof ContainerStyle>

const Container: React.FC<{ children?: React.ReactNode } & Variants> = (props) => {
  return <ContainerStyle {...props} />;
};

export {
  Container
};
