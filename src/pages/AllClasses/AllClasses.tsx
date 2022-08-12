/* eslint-disable react/jsx-key */
import { Flex, Heading, Text, useMediaQuery, VStack } from '@chakra-ui/react'

import { AppTemplate, CardNavigationWithImage } from 'components'
import { mock } from './mock'

const AllClasses = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const hearderContent = () => {
    return (
      <Flex alignItems="center">
        <Heading fontWeight="700" fontSize="1.25rem" color="gray.300">
          Turmas
        </Heading>
      </Flex>
    )
  }

  return (
    <AppTemplate headerContent={hearderContent()}>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        w="100%"
        alignItems="stretch"
        gap="33px"
        minHeight="100vh"
        p="20px 0px"
      >
        {mock.map((item) => (
          <CardNavigationWithImage key={item.name} {...item} />
        ))}
      </Flex>
    </AppTemplate>
  )
}

export default AllClasses
