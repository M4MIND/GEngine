import React from "react";
import { basicVariants, styled } from "../theme/Theme";
import * as Stitches from "@stitches/react";

const TypographyStyle = styled("span", {
  variants: {
    fontWeight: {
      100: { fontWeight: 100 },
      200: { fontWeight: 200 },
      300: { fontWeight: 300 },
      400: { fontWeight: 400 },
      500: { fontWeight: 500 },
      600: { fontWeight: 600 },
      700: { fontWeight: 700 },
      800: { fontWeight: 800 },
      900: { fontWeight: 900 }
    },
    style: {
      h1: {
        fontSize: "$xxl",
        margin: "0 0 $s 0",
        fontWeight: 600
      },
      h2: {
        fontSize: "$xl",
        margin: "0 0 $s 0",
        fontWeight: 600
      },
      h3: {
        fontSize: "$l",
        margin: "0 0 $s 0",
        fontWeight: 600
      },
      h4: {
        fontSize: "$m",
        margin: "0 0 $s 0",
        fontWeight: 600
      },
      h5: {
        fontSize: "$s",
        margin: "0 0 $s 0",
        fontWeight: 600
      },
      h6: {
        fontSize: "$xs",
        margin: "0 0 $s 0",
        fontWeight: 600
      },
      p: {
        fontSize: "$m",
        margin: "0 0 $s 0"
      },
      span: {
        fontSize: "$m"
      }
    }
  },
  defaultVariants: {
    fontWeight: 300,
    style: "span"
  }
}, basicVariants);

type Variants = Stitches.VariantProps<typeof TypographyStyle>

const Typography: React.FC<{
  children?: React.ReactNode,
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p"
} & Variants> = ({ as, ...props }) => {
  return <TypographyStyle as={as} style={as} {...props} />;
};

export {
  Typography,
  TypographyStyle
};
