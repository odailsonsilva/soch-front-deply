import { Box, Flex, VStack } from '@chakra-ui/react'

import UserIcon from 'assets/images/icons/user.svg'
import Logo from 'components/atoms/Logo'
import { nav_link } from 'constants/nav'
import { NavItem } from './components/NavItem'

const SibebarDesktop = () => (
  <Flex
    flexDirection="column"
    width="260px"
    h="100vh"
    background="primary"
    padding="40px 16px"
  >
    <Flex
      flexDirection="column"
      alignItems="center"
      height="100vh"
      width="210px"
    >
      <Box>
        <Logo />
      </Box>

      <Flex
        direction="column"
        alignItems="stretch"
        justifyContent="space-between"
        flex="1"
      >
        <VStack mt="60px">
          {nav_link.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </VStack>

        <NavItem icon={UserIcon} to="/profile" name="Perfil" />
      </Flex>
    </Flex>
  </Flex>
)

export default SibebarDesktop
