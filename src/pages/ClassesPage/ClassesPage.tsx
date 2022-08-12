/* eslint-disable react/jsx-key */
import { Flex, Heading, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import { FiChevronRight, FiUsers } from 'react-icons/fi'
import ReactPlayer from 'react-player'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { IoPlayForwardOutline } from 'react-icons/io5'

import CheckIcon from 'assets/images/icons/check-circle.svg'
import FileIcon from 'assets/images/icons/file.svg'
import SlideFile from 'assets/images/icons/monitor-analitics.svg'
import UploadFile from 'assets/images/icons/upload-file.svg'

import {
  AppTemplate,
  Breadcrumbs,
  Button,
  ButtonAction,
  Card,
  Tabs
} from 'components'

import { ReactSVG } from 'react-svg'
import { IListBreadcrumb } from 'components/molecules/Breadcrumbs'

const list: IListBreadcrumb[] = [
  {
    link: '/',
    text: 'Turma 1º A'
  },
  {
    link: '/aulas',
    text: 'Aulas'
  },
  {
    link: '/aulas/operacoes-basicas',
    text: 'Operações Básicas'
  },
  {
    link: '/aulas/operacoes-basicas/sistema-decimal',
    text: 'Sistema decimal'
  }
]

const ClassesPage = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const hearderContent = () => {
    return (
      <>
        <Heading fontWeight="400" fontSize="1rem" color="gray.200" mb="13px">
          Olá, Léo
        </Heading>

        <Flex alignItems="center" gap="14px">
          <FiUsers size={25} color="#A0A0A0" />

          <Breadcrumbs list={list} />
        </Flex>
      </>
    )
  }

  return (
    <AppTemplate headerContent={hearderContent()} list={list}>
      <Flex
        minHeight="100vh"
        direction="column"
        w="100%"
        alignItems="stretch"
        height="100%"
      >
        <Flex
          mt="32px"
          w="100%"
          direction={{ base: 'column', md: 'column', lg: 'row' }}
          justifyContent="space-between"
          gap="30px"
        >
          <VStack maxWidth={{ base: '100%', md: '100%', lg: '362px' }} w="100%">
            <ButtonAction
              iconLeft={<ReactSVG src={CheckIcon} />}
              label="Baixar exercícios"
              iconTypeRight="next"
            />
            <ButtonAction
              iconLeft={<ReactSVG src={FileIcon} />}
              label="Slides"
              iconTypeRight="upload"
            />
            <ButtonAction
              iconLeft={<ReactSVG src={CheckIcon} />}
              label="Apostila"
              iconTypeRight="upload"
            />
            <ButtonAction
              iconLeft={<ReactSVG src={UploadFile} />}
              label="Exercícios"
              iconTypeRight="upload"
            />
          </VStack>

          <Card
            minHeight={{ base: '252px', md: '252px', lg: '505px' }}
            height={{ base: '252px', md: '252px', lg: '70vh' }}
            w="100%"
            {...(isMobile && {
              order: '-1'
            })}
          >
            <Tabs
              tabs={[
                <Flex alignItems="center" gap="8px">
                  <AiOutlinePlayCircle size={22} />
                  <Text>Aula</Text>
                </Flex>,
                <Flex alignItems="center" gap="8px">
                  <IoPlayForwardOutline size={22} />
                  <Text>Fast learning</Text>
                </Flex>
              ]}
              content={[
                <Flex
                  flex="1"
                  bg="#ccc"
                  h={{ base: '152px', md: '152px', lg: '60vh' }}
                >
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=N0uOa6Mkmrg"
                    width="100%"
                    height="100%"
                    controls
                  />
                </Flex>,
                <Flex
                  flex="1"
                  bg="#ccc"
                  h={{ base: '152px', md: '152px', lg: '400px' }}
                >
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=_Ur59IV_2Ik"
                    width="100%"
                    height="100%"
                    controls
                  />
                </Flex>
              ]}
            />
          </Card>
        </Flex>

        <Flex
          justifyContent={isMobile ? 'center' : 'flex-end'}
          flex="1"
          w="100%"
          mt="32px"
        >
          <Button>
            <Flex alignItems="center">
              <Text mr="1">Próximo momento </Text>
              <FiChevronRight size={20} />
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </AppTemplate>
  )
}

export default ClassesPage
