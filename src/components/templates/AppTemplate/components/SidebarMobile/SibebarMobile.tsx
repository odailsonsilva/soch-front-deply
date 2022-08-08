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
      bg="primary"
      h="52px"
      w="100%"
      p="16px"
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
