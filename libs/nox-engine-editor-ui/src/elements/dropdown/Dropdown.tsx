import { BasicVariants, styled } from '../theme/Theme';
import React, { useEffect, useRef } from 'react';
import { Card } from '../card/Card';
import { Typography, TypographyStyle } from '../typography/Typography';
import { CardBody } from '../card/CardBody';

const DropdownStyle = styled('div', {
  position: 'absolute',
  top: '100%',
  marginTop: '$xxs',
  minWidth: '10rem',
  zIndex: 2,
  display: 'none',
  variants: {
    open: {
      true: {
        display: 'block',
      },
    },
  },
});

const DropdownItemStyle = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  padding: '0 $xs',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.12)',
  },
  [`& ${TypographyStyle}`]: {
    lineHeight: 'calc($m * 1.8)',
    display: 'block',
    whiteSpace: 'nowrap',
    fontSize: 'calc($xxs * 0.925)',
  },
});

const DropdownIconStyle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc($m * 1.8)',
  maxHeight: 'calc($m * 1.8)',
  marginRight: '$xs',
  fontSize: 'calc($xxs * 0.925)',
});

const DropdownDividerStyle = styled('div', {
  height: 1,
  backgroundColor: 'rgba(255,255,255, 0.12)',
  marginTop: 'calc($xxs * 0.4)',
  marginBottom: 'calc($xxs * 0.4)',
});

export const Dropdown: React.FC<{
  children: React.ReactNode,
  v_bgc?: BasicVariants['v_bgc'],
  open?: boolean,
  onClose?: () => void,
}> = ({ open, v_bgc, onClose, children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current || ref.current?.contains(e.target as Element)) {
        return;
      }

      if (onClose) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return <DropdownStyle ref={ref} open={open ?? false} {...props}>
    <Card {...props} v_bgc={v_bgc ?? 'dark'} shadow>
      <CardBody v_padding={'none'}>
        {children}
      </CardBody>
    </Card>
  </DropdownStyle>;
};

export const DropdownItem: React.FC<{
  icon?: React.ReactNode,
  children: React.ReactNode,
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}> = ({ icon, children, ...props }) => {
  return <DropdownItemStyle {...props}>
    {icon && <DropdownIconStyle>{icon}</DropdownIconStyle>}
    <Typography as={'span'}>{children}</Typography>
  </DropdownItemStyle>;
};

export const DropdownDivider: React.FC = () => {
  return <DropdownDividerStyle />;
};
