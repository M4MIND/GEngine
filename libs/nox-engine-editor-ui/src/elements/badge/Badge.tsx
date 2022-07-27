import { basicVariants, styled } from "../theme/Theme";
import React from "react";
import * as Stitches from "@stitches/react";

const BadgeStyle = styled("span", {
  display: 'inline-block',
  padding: '0.3125rem 0.4375rem',
  fontSize: '.75rem',
  fontWeight: '500',
  lineHeight: '1',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.1875rem',
  transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-inOut',
}, basicVariants);

type Variants = Stitches.VariantProps<typeof BadgeStyle>

export const Badge: React.FC<{ children: React.ReactNode } & Variants> = (props) => {
  return <BadgeStyle {...props} />;
};
