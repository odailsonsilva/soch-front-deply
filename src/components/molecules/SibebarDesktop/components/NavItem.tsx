import { Flex, Text } from '@chakra-ui/react'
import { ReactSVG } from 'react-svg'
import { NavData } from 'constants/nav'

export const NavItem = ({ icon, name, to }: NavData) => {
  return (
    <Flex
      width="196px"
      as="button"
      gap="8px"
      height="48px"
      align="center"
      padding="10px"
      borderRadius="8px"
      transition="all 0.2s ease"
      border="none"
      _hover={{ background: 'secondary', cursor: 'pointer' }}
    >
      <ReactSVG src={icon} />

      <Text color="white">{name}</Text>
    </Flex>
  )
}
