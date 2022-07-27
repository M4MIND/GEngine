import React from "react";
import { basicVariants, styled } from '../theme/Theme';
import * as Stitches from "@stitches/react";

export const CardBodyStyle = styled('div', {
  padding: '$m'
}, basicVariants)

type Variants = Stitches.VariantProps<typeof CardBodyStyle>

export const CardBody: React.FC<{ children?: React.ReactNode } & Variants> = (props) => {
  return <CardBodyStyle {...props}/>
}
