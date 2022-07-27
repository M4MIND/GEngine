import React from "react";
import { basicVariants, styled } from "../theme/Theme";
import type * as Stitches from "@stitches/react";

const CardStyle = styled("div", {
  wordWrap: "none",
  border: "0 solid transparent",
  borderRadius: 2,
  transition: "all .2s ease",
  width: "100%",
  variants: {
    shadow: {
      true: {
        boxShadow: "0 1px 2px 0 rgb(33 33 33 / 14%), 0 0 1px 0 rgb(0 0 0 / 14%)"
      }
    }
  }
}, basicVariants);

type Variants = Stitches.VariantProps<typeof CardStyle>

const Card: React.FC<{
  children: React.ReactNode,
  onContextMenu?: (e: React.MouseEvent<HTMLDivElement>) => void
} & Variants> = (props) => {
  return <CardStyle {...props} />;
};

export { Card };
