import { styled } from "../theme/Theme";
import React from "react";
import * as Stitches from "@stitches/react";

const GridStyle = styled("div", {
  display: "grid",
  gap: "$m",
  gridTemplateColumns: "auto",
  gridTemplateRows: "auto",
  width: '100%',
  variants: {
    gap: {
      xs: { gap: "$xs" },
      s: { gap: "$s" },
      m: { gap: "$m" },
      l: { gap: "$l" },
      xl: { gap: "$xl" }
    },
    col: {
      1: { gridTemplateColumns: "repeat(1, 1fr)" },
      2: { gridTemplateColumns: "repeat(2, 1fr)" },
      3: { gridTemplateColumns: "repeat(3, 1fr)" },
      4: { gridTemplateColumns: "repeat(4, 1fr)" },
      5: { gridTemplateColumns: "repeat(5, 1fr)" },
      6: { gridTemplateColumns: "repeat(6, 1fr)" },
      7: { gridTemplateColumns: "repeat(7, 1fr)" },
      8: { gridTemplateColumns: "repeat(8, 1fr)" },
      9: { gridTemplateColumns: "repeat(9, 1fr)" },
      10: { gridTemplateColumns: "repeat(10, 1fr)" },
      11: { gridTemplateColumns: "repeat(11, 1fr)" },
      12: { gridTemplateColumns: "repeat(12, 1fr)" }
    },
    row: {
      1: { gridTemplateRows: "repeat(1, 1fr)" },
      2: { gridTemplateRows: "repeat(2, 1fr)" },
      3: { gridTemplateRows: "repeat(3, 1fr)" },
      4: { gridTemplateRows: "repeat(4, 1fr)" },
      5: { gridTemplateRows: "repeat(5, 1fr)" },
      6: { gridTemplateRows: "repeat(6, 1fr)" },
      7: { gridTemplateRows: "repeat(7, 1fr)" },
      8: { gridTemplateRows: "repeat(8, 1fr)" },
      9: { gridTemplateRows: "repeat(9, 1fr)" },
      10: { gridTemplateRows: "repeat(10, 1fr)" },
      11: { gridTemplateRows: "repeat(11, 1fr)" },
      12: { gridTemplateRows: "repeat(12, 1fr)" }
    }
  }
});

type Variants = Stitches.VariantProps<typeof GridStyle>

const Grid: React.FC<{ children?: React.ReactNode, css?: Stitches.CSS } & Variants> = (props) => {
  return <GridStyle {...props} />;
};
export {
  Grid
};
