import { Button as ButtonChakra, ButtonProps } from '@chakra-ui/react'

interface IButtonParams extends ButtonProps {
  children: React.ReactNode
}

const Button = ({ children, ...rest }: IButtonParams) => (
  <ButtonChakra
    {...rest}
    borderRadius="16px"
    height="48px"
    minWidth={{ base: '100%', md: '100%', lg: '360px' }}
    background="primary"
    color="#fff"
    transition="all 0.2 ease"
    _hover={{
      background: 'primary',
      filter: 'brightness(0.8)'
    }}
    _actived={{
      background: 'primary',
      filter: 'brightness(0.8)'
    }}
  >
    {children}
  </ButtonChakra>
)

export default Button
