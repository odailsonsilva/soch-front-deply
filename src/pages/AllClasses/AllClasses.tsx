/* eslint-disable react/jsx-key */
import {
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'

import {
  AppTemplate,
  CardNavigationWithImage,
  DropdownClasses
} from 'components'
import { mock } from './mock'

const AllClasses = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const hearderContent = () => {
    return (
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontWeight="700" fontSize="1.25rem" color="gray.300">
          Turmas
        </Heading>

        <DropdownClasses />
      </Flex>
    )
  }

  const hearderContentMobile = () => {
    return (
      <Flex alignItems="center" justifyContent="space-between">
        <DropdownClasses />
      </Flex>
    )
  }

  return (
    <AppTemplate
      headerContent={hearderContent()}
      headerContentMobile={hearderContentMobile()}
      variant="white"
    >
      <Stack
        display="flex"
        direction={isMobile ? 'column' : 'row'}
        w="100%"
        alignItems="stretch"
        p="20px 0px"
        spacing={isMobile ? '16px' : '33px'}
      >
        {mock.map((item) => (
          <CardNavigationWithImage key={item.name} {...item} />
        ))}
      </Stack>
    </AppTemplate>
  )
}

export default AllClasses
