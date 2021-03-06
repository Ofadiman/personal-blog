import styled, { css } from 'styled-components'

import { StyledVisualRippleEffectProps } from './RippleEffect.types'

export const VisualRippleEffect = styled.span<StyledVisualRippleEffectProps>`
  ${({ color, millisecondsDuration, size, offsetLeft, offsetTop }) => css`
    animation-duration: ${millisecondsDuration}ms;
    animation-name: ripple;
    background-color: ${color};
    border-radius: 100%;
    height: ${size}px;
    left: ${offsetLeft}px;
    opacity: 0.75;
    position: absolute;
    top: ${offsetTop}px;
    transform: scale(0);
    width: ${size}px;

    @keyframes ripple {
      to {
        opacity: 0;
        transform: scale(3);
      }
    }
  `}
`

export const RippleEffectWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`
