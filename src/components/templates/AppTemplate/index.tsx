import { Box, Flex, Heading } from '@chakra-ui/react'
import { Breadcrumbs } from 'components/molecules'
import { IListBreadcrumb } from 'components/molecules/Breadcrumbs'
import SibebarDesktop from 'components/molecules/SibebarDesktop'
import { FiUsers } from 'react-icons/fi'

interface IAppTemplate {
  children: React.ReactNode
}

const list: IListBreadcrumb[] = [
  {
    link: '/',
    text: 'Turma 1º A'
  },
  {
    link: '/',
    text: 'Aulas'
  },
  {
    link: '/',
    text: 'Operações Básicas'
  },
  {
    link: '/',
    text: 'TSistema decimal'
  }
]

const AppTemplate = ({ children }: IAppTemplate) => (
  <Flex width="100vw" minHeight="100vh" position="relative">
    <SibebarDesktop />

    <Box
      background="backgroundGray"
      borderRadius="30px 0px 0px 30px"
      position="absolute"
      left="230px"
      top="0"
      bottom="0"
      right="0"
    >
      <Flex
        pb="2"
        direction="column"
        borderBottom="1px solid #EBEBEB"
        flex="1"
        w="100%"
        padding="32px"
      >
        <Heading fontWeight="400" fontSize="1rem" color="gray.200" mb="13px">
          Olá, Léo
        </Heading>

        <Flex alignItems="center" gap="14px">
          <FiUsers size={25} color="#A0A0A0" />

          <Breadcrumbs list={list} />
        </Flex>
      </Flex>

      <Box
        overflow="auto"
        maxHeight="80vh"
        paddingLeft="32px"
        pb="32px"
        pr="32px"
      >
        {children}
      </Box>
    </Box>
  </Flex>
)

export default AppTemplate
