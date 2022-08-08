import { Box, BoxProps } from '@chakra-ui/react'

export interface ICardParams extends BoxProps {
  children: React.ReactNode
}

export const Card = ({ children, ...rest }: ICardParams) => (
  <Box
    width="100%"
    bg="#fff"
    border="2px solid #EDEDED"
    borderRadius="16px"
    p="12px 15px"
    {...rest}
  >
    {children}
  </Box>
)
