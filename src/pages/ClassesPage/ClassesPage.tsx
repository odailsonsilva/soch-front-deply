/* eslint-disable react/jsx-key */
import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { FiChevronRight, FiUsers } from 'react-icons/fi'

import CheckIcon from 'assets/images/icons/check-circle.svg'

import { Breadcrumbs, Button, ButtonAction, Card, Tabs } from 'components'
import { IListBreadcrumb } from 'components/molecules/Breadcrumbs'
import { ReactSVG } from 'react-svg'

const ClassesPage = () => {
  return (
    <Flex direction="column" alignItems="flex-start">
      <Flex direction="column" w="100%" h="">
        <Flex
          mt="32px"
          w="100%"
          direction={{ base: 'column', md: 'column', lg: 'row' }}
          justifyContent="space-between"
          gap="30px"
        >
          <VStack maxWidth="362px" w="100%">
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

          <Card maxW="754px" h="505px" w="100%">
            <Tabs
              tabs={['1', '2']}
              content={[
                <Flex flex="1" bg="#ccc" h="400px">
                  Video 1
                </Flex>,
                <Flex flex="1" bg="#ccc" h="400px">
                  Video 2
                </Flex>
              ]}
            />
          </Card>
        </Flex>

        <Flex justifyContent="flex-end" w="100%" mt="32px">
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
