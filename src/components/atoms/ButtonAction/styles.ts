import styled, { css } from 'styled-components'
import { Button as ChakraButton } from '@chakra-ui/react'
import { IVariantIcon } from '.'

const colorsVariant: any = {
  violet: '#7626EA',
  gray: '#474C58',
  yellow: '#D9AC0C',
  pink: '#FF669D'
}

export const Button = styled<any>(ChakraButton)`
  ${({ variantIcon }) => css`
    svg path {
      stroke: ${colorsVariant[variantIcon]};
    }
  `}
`
