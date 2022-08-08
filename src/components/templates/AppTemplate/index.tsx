import { Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { FiUsers } from 'react-icons/fi'

import { HeaderMobile, SibebarMobile } from './components'
import { Breadcrumbs } from 'components/molecules'
import { IListBreadcrumb } from 'components/molecules/Breadcrumbs'
import SibebarDesktop from 'components/molecules/SibebarDesktop'

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
    text: 'Sistema decimal'
  }
]

const AppTemplate = ({ children }: IAppTemplate) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Flex
      width="100vw"
      minHeight="100vh"
      position="relative"
      {...(isMobile && {
        direction: 'column',
        alignItems: 'stretch'
      })}
    >
      {!isMobile && <SibebarDesktop />}
      {isMobile && <HeaderMobile list={list} />}

      <Box
        background="backgroundGray"
        borderRadius={{ base: '0px', md: '0px', lg: '30px 0px 0px 30px' }}
        position={{ base: 'relative', md: 'relative', lg: 'absolute' }}
        left={{ base: '0px', md: '0px', lg: '230px' }}
        top="0"
        bottom="0"
        right="0"
        {...(isMobile && {
          marginTop: '-20px',
          borderRadius: '16px 16px 0px 0px'
        })}
      >
        {!isMobile && (
          <Flex
            pb="2"
            direction="column"
            borderBottom="1px solid #EBEBEB"
            flex="1"
            w="100%"
            padding="32px"
          >
            <Heading
              fontWeight="400"
              fontSize="1rem"
              color="gray.200"
              mb="13px"
            >
              Olá, Léo
            </Heading>

            <Flex alignItems="center" gap="14px">
              <FiUsers size={25} color="#A0A0A0" />

              <Breadcrumbs list={list} />
            </Flex>
          </Flex>
        )}

        <Box
          overflow="auto"
          maxHeight={isMobile ? 'calc(100vh - 232px)' : 'calc(100vh - 130px)'}
          p={{ base: '16px', md: '16px', lg: '32px' }}
          pt="0"
        >
          {children}
        </Box>
      </Box>

      {isMobile && <SibebarMobile />}
    </Flex>
  )
}

export default AppTemplate
