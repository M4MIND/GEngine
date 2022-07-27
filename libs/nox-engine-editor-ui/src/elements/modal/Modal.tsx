import { styled } from '../theme/Theme';
import { Card, CardBody, CardHeader, Typography } from '@nox-engine/nox-engine-editor-ui';
import React from 'react';
import { X } from 'react-bootstrap-icons';

const ModalStyle = styled('div', {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999
});

const ModalClose = styled('div', {
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  top: '0.4rem',
  right: '0.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.4rem'
});

const ModalWrapperStyle = styled('div', {
  variants: {
    size: {
      s: {
        width: '32rem'
      },
      m: {
        width: '32rem'
      },
      l: {
        width: '52rem'
      }
    }
  },
  defaultVariants: {
    size: 'm'
  }
});

const Modal: React.FC<{
  children: React.ReactNode,
  title?: string,
  onClose?: () => void,
  open?: boolean
}> = ({ children, onClose, title, open, ...props }) => {
  if (!open) {
    return null;
  }
  return (<ModalStyle>
      <ModalWrapperStyle>
        <Card bgc={'dark'} position={'relative'}>
          <ModalClose onClick={onClose}><X /></ModalClose>
          {title && <CardHeader><Typography as={'h4'} marginBottom={'none'}>{title}</Typography></CardHeader>}
          <CardBody>{children}</CardBody>
        </Card>
      </ModalWrapperStyle>
    </ModalStyle>
  );
};

export { Modal };
