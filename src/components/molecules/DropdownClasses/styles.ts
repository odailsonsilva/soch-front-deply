import styled, { css } from 'styled-components'

type IconData = {
  isMobile: boolean
}

export const Icon = styled.div<IconData>`
  ${({ isMobile }) => css`
    svg {
      width: 24px;
      height: 24px;
    }

    svg path {
      stroke: ${isMobile ? '#FFF' : '#7626ea'};
    }
  `}
`
