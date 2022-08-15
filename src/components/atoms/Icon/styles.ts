import styled, { css } from 'styled-components'
import { IIconParams } from '.'

type WrapperParams = Omit<IIconParams, 'icon'>

export const Wrapper = styled.div<WrapperParams>`
  ${({ color, size }) => css`
    svg {
      width: ${`${size}px`};
      height: ${`${size}px`};
    }

    svg path {
      stroke: ${color};
    }
  `}
`
