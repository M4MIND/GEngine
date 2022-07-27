import React from 'react';
import { basicVariants, styled } from '../theme/Theme';
import { keyframes } from '@stitches/react';

const PreloaderStyle = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '$dark',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const animationStyle = keyframes({
  '0%': { transform: 'translateY(-24px)' },
  '50%': { transform: 'translateY(24px)' },
  '100%': { transform: 'translateY(-24px)' },
});

const animationStyleD = keyframes({
  '0%': { transform: 'translateY(-24px)' },
  '50%': { transform: 'translateY(24px)' },
  '100%': { transform: 'translateY(-24px)' },
});


const PreloaderDotStyle = styled('div', {
  animation: `${animationStyle}`,
  animationTimingFunction: 'ease-in-out',
  animationDuration: '1.6s',
  animationIterationCount: 'infinite',
  width: 20,
  height: 20,
  borderRadius: '50%',
  margin: 'calc($xxs * 0.4)',
  position: 'relative',
  transform: 'translateY(-24px)',
  "&::after": {
    transform: 'translateY(-24px)',
    animation: `${animationStyleD}`,
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1.6s',
    animationIterationCount: 'infinite',
    content: '',
    position: 'absolute',
    backgroundColor: 'inherit',
    opacity: 0.5,
    top: -28,
    left: -2,
    right: -2,
    bottom: -28,
    borderRadius: 12,
  }
}, basicVariants);

const PreloaderContainerStyle = styled('div', {
  display: 'flex',
  [`${PreloaderDotStyle}:nth-child(1)`]: {
    animationDelay: '0.5s',
  }, [`${PreloaderDotStyle}:nth-child(2)`]: {
    animationDelay: '0.4s',
  }, [`${PreloaderDotStyle}:nth-child(3)`]: {
    animationDelay: '0.3s',
  }, [`${PreloaderDotStyle}:nth-child(4)`]: {
    animationDelay: '0.2s',
  }, [`${PreloaderDotStyle}:nth-child(5)`]: {
    animationDelay: '0.1s',
  }, [`${PreloaderDotStyle}:nth-child(6)`]: {
    animationDelay: '0s',
  },
});

export const Preloader: React.FC = () => {
  return <PreloaderStyle>
    <PreloaderContainerStyle>
      <PreloaderDotStyle v_bgc={'info'}/>
      <PreloaderDotStyle v_bgc={'success'} />
      <PreloaderDotStyle v_bgc={'secondary'} />
      <PreloaderDotStyle v_bgc={'light'} />
      <PreloaderDotStyle v_bgc={'blue'} />
      <PreloaderDotStyle v_bgc={'warning'} />
    </PreloaderContainerStyle>
  </PreloaderStyle>;
};
