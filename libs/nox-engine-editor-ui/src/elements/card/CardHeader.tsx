import React from "react";
import { basicVariants, styled } from "../theme/Theme";
import * as Stitches from "@stitches/react";

export const CardHeaderStyle = styled("div", {
  padding: "$m",
}, basicVariants);

type Variants = Stitches.VariantProps<typeof CardHeaderStyle>

export const CardHeader: React.FC<{ children?: React.ReactNode } & Variants> = (props) => {
  return <CardHeaderStyle {...props} />;
};
