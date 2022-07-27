import React from 'react';
import { basicVariants, styled } from '../theme/Theme';
import * as Stitches from '@stitches/react';
import { Typography, TypographyStyle } from '../typography/Typography';

const ButtonIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  backgroundColor: 'rgba(0,0,0,0.1)',
});
const ButtonStyle = styled('button', {
  overflow: 'hidden',
  alignItems: 'center',
  backgroundImage: 'none!important',
  border: 'none',
  borderRadius: '2px',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  marginBottom: '0',
  position: 'relative',
  textAlign: 'center',
  outline: 'none',
  padding: 0,
  [`& ${TypographyStyle}`]: { zIndex: 2 },
  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    opacity: 0,
  },
  '&:hover::before': {
    opacity: 1,
  },
  variants: {
    icon: {
      true: {},
    },
    size: {
      large: {
        lineHeight: 'calc($l * 1.8)',
        paddingLeft: 'calc($l * 1.6)',
        paddingRight: 'calc($l * 1.6)',
        fontSize: '$m',
        [`& ${ButtonIcon}`]: {
          width: 'calc($l * 1.925)',
          minWidth: 'calc($l * 1.925)',
          maxWidth: 'calc($l * 1.925)',
        },
      },
      medium: {
        [`& ${ButtonIcon}`]: {
          minWidth: 'calc($xs * 2.375)',
          maxWidth: 'calc($xs * 2.375)',
          minHeight: 'calc($xs * 2.375)',
          maxHeight: 'calc($xs * 2.375)',
        },
        [`& ${TypographyStyle}`]: {
          lineHeight: 'calc($xs * 2.375)',
          paddingLeft: 'calc($xs * 1.6)',
          paddingRight: 'calc($xs * 1.6)',
          fontSize: 'calc($xs * 0.875)',
        },
      },
      small: {
        [`& ${ButtonIcon}`]: {
          minWidth: 'calc($xxs * 2)',
          maxWidth: 'calc($xxs * 2)',
          minHeight: 'calc($xxs * 2)',
          maxHeight: 'calc($xxs * 2)',
        },
        [`& ${TypographyStyle}`]: {
          lineHeight: 'calc($xxs * 2)',
          paddingLeft: 'calc($xxs * 1.6)',
          paddingRight: 'calc($xxs * 1.6)',
          fontSize: 'calc($xxs * 0.875)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
}, basicVariants);

type Variants = Stitches.VariantProps<typeof ButtonStyle>

export const Button: React.FC<{
  children?: React.ReactNode,
  $icon?: React.ReactNode,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & Variants> = ({ children, $icon, ...props }) => {
  return <ButtonStyle icon={!!$icon} {...props}>
    {$icon && <ButtonIcon>{$icon}</ButtonIcon>}
    {children && <Typography>{children}</Typography>}
  </ButtonStyle>;
};
