import { Grid, Flex, Box, useBreakpointValue } from '@chakra-ui/react'

import { Sidebar, Header } from 'components'

type Props = {
  children: React.ReactNode
}

export const LayoutAuthenticated = ({ children }: Props) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Grid templateColumns={isDesktop ? '260px 1fr' : '1fr'} h="100vh">
      <Box
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        boxShadow="0 0 15px 0 rgb(34 41 47 / 5%)"
      >
        <Sidebar />
      </Box>
      {isDesktop && <Box />}

      <Grid templateRows="80px 1fr" bg="#F7F7F7" px="36px" pb="36px">
        <Flex
          flex="1"
          position="sticky"
          top="0"
          pt="20px"
          left="40px"
          right="260px"
          zIndex="20"
          bg="#F7F7F7"
        >
          <Header />
        </Flex>

        <Flex mt="36px" flex="1" zIndex={10}>
          {children}
        </Flex>
      </Grid>
    </Grid>
  )
}
