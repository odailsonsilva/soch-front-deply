import { Flex } from '@chakra-ui/react'
import { FaRegUser } from 'react-icons/fa'

import { NavItem } from 'components/molecules/SibebarDesktop/components/NavItem'
import { nav_link } from 'constants/nav'
import UserIcon from 'assets/images/icons/user.svg'

export const SibebarMobile = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="linear-gradient(107.29deg, #7626EA 38.13%, #C924A6 143.12%);"
      h="52px"
      w="100%"
      p="16px"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
    >
      {nav_link.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}

      <NavItem
        iconLib={<FaRegUser size={28} color="#fff" />}
        to="/profile"
        name="Perfil"
      />
    </Flex>
  )
}
