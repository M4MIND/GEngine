import { basicVariants, styled } from "../theme/Theme";
import React from 'react';
import * as Stitches from '@stitches/react';

const GridItemStyle = styled('div', {
  variants: {
    alignItems: {
      center: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    justifyContent: {
      center: {
        display: 'flex',
        justifyContent: 'center'
      },
      right: {
        display: 'flex',
        justifyContent: 'right'
      }
    },
    colStart: {
      1: { gridColumnStart: 1 },
      2: { gridColumnStart: 2 },
      3: { gridColumnStart: 3 },
      4: { gridColumnStart: 4 },
      5: { gridColumnStart: 5 },
      6: { gridColumnStart: 6 },
      7: { gridColumnStart: 7 },
      8: { gridColumnStart: 8 },
      9: { gridColumnStart: 9 },
      10: { gridColumnStart: 10 },
      11: { gridColumnStart: 11 },
      12: { gridColumnStart: 12 }
    },
    colEnd: {
      1: { gridColumnEnd: 1 },
      2: { gridColumnEnd: 2 },
      3: { gridColumnEnd: 3 },
      4: { gridColumnEnd: 4 },
      5: { gridColumnEnd: 5 },
      6: { gridColumnEnd: 6 },
      7: { gridColumnEnd: 7 },
      8: { gridColumnEnd: 8 },
      9: { gridColumnEnd: 9 },
      10: { gridColumnEnd: 10 },
      11: { gridColumnEnd: 11 },
      12: { gridColumnEnd: 12 }
    },
    rowStart: {
      1: { gridRowStart: 1 },
      2: { gridRowStart: 2 },
      3: { gridRowStart: 3 },
      4: { gridRowStart: 4 },
      5: { gridRowStart: 5 },
      6: { gridRowStart: 6 },
      7: { gridRowStart: 7 },
      8: { gridRowStart: 8 },
      9: { gridRowStart: 9 },
      10: { gridRowStart: 10 },
      11: { gridRowStart: 11 },
      12: { gridRowStart: 12 }
    },
    rowEnd: {
      1: { gridRowEnd: 1 },
      2: { gridRowEnd: 2 },
      3: { gridRowEnd: 3 },
      4: { gridRowEnd: 4 },
      5: { gridRowEnd: 5 },
      6: { gridRowEnd: 6 },
      7: { gridRowEnd: 7 },
      8: { gridRowEnd: 8 },
      9: { gridRowEnd: 9 },
      10: { gridRowEnd: 10 },
      11: { gridRowEnd: 11 },
      12: { gridRowEnd: 12 }
    }
  }
}, basicVariants);

type Variants = Stitches.VariantProps<typeof GridItemStyle>

const GridItem: React.FC<{children: React.ReactNode} & Variants> = (props) => {
  return <GridItemStyle {...props}/>;
};

export {
  GridItem
};
