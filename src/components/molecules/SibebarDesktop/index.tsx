import { Box, Flex, VStack } from '@chakra-ui/react'

import UserIcon from 'assets/images/icons/user.svg'
import Logo from 'components/atoms/Logo'
import { nav_link } from 'constants/nav'
import { NavItem } from './components/NavItem'

const SibebarDesktop = () => (
  <Box
    transform="matrix(1, 0, 0, -1, 0, 0);"
    background="radial-gradient(94.21% 111.98% at 101.22% -41.31%, #CB27A6 0%, #CB27A6 0.04%, #7626EA 100%)"
  >
    <Flex
      flexDirection="column"
      width="290px"
      h="100vh"
      padding="40px 16px"
      transform="matrix(1, 0, 0, -1, 0, 0);"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        height="100vh"
        width="230px"
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
  </Box>
)

export default SibebarDesktop
