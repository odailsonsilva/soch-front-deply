/* eslint-disable react/jsx-key */
import { Flex, Heading, Text, useMediaQuery, VStack } from '@chakra-ui/react'

import { AppTemplate } from 'components'

const Subjects = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const hearderContent = () => {
    return <>tgeste</>
  }

  return (
    <AppTemplate headerContent={hearderContent}>
      <Flex direction="column" w="100%" alignItems="stretch" height="100%">
        content
      </Flex>
    </AppTemplate>
  )
}

export default Subjects
