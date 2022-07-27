import React from "react";
import { basicVariants, globalStyles, styled } from "../theme/Theme";
import * as Stitches from "@stitches/react";

const HomeStyle = styled("div", {
  minHeight: '100vh',
  minWidth: '100vw',
  display: 'flex',
  flexDirection: 'row',
}, basicVariants);

type Variants = Stitches.VariantProps<typeof HomeStyle>

const Home: React.FC<{ children: React.ReactNode } & Variants> = (props) => {
  globalStyles();
  return <HomeStyle onContextMenu={(e) => {e.preventDefault()}} {...props} />;
};


export {
  Home
};
