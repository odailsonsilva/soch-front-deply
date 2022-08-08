/* eslint-disable react/jsx-key */
import { Flex, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { IoPlayForwardOutline } from 'react-icons/io5'

import CheckIcon from 'assets/images/icons/check-circle.svg'

import { Button, ButtonAction, Card, Tabs } from 'components'

import { ReactSVG } from 'react-svg'

const ClassesPage = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Flex direction="column" alignItems="flex-start">
      <Flex direction="column" w="100%">
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
              label="Exercícios"
              iconTypeRight="next"
            />
            <ButtonAction
              iconLeft={<ReactSVG src={CheckIcon} />}
              label="Exercícios"
              iconTypeRight="next"
            />
            <ButtonAction
              iconLeft={<ReactSVG src={CheckIcon} />}
              label="Exercícios"
              iconTypeRight="next"
            />
            <ButtonAction
              iconLeft={<ReactSVG src={CheckIcon} />}
              label="Exercícios"
              iconTypeRight="next"
            />
          </VStack>

          <Card
            maxW="754px"
            h={{ base: '252px', md: '252px', lg: '505px' }}
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
                  h={{ base: '152px', md: '152px', lg: '400px' }}
                >
                  Video 1
                </Flex>,
                <Flex
                  flex="1"
                  bg="#ccc"
                  h={{ base: '152px', md: '152px', lg: '400px' }}
                >
                  Video 2
                </Flex>
              ]}
            />
          </Card>
        </Flex>

        <Flex
          justifyContent={isMobile ? 'center' : 'flex-end'}
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
    </Flex>
  )
}

export default ClassesPage
