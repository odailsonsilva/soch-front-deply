import { Box, Flex, Text } from '@chakra-ui/react'
import { Logo } from 'components/atoms'
import { Breadcrumbs } from 'components/molecules'
import { IListBreadcrumb } from 'components/molecules/Breadcrumbs'

interface IHeaderMobileParams {
  list?: IListBreadcrumb[]
  content?: React.ReactNode
}

export const HeaderMobile = ({ list, content }: IHeaderMobileParams) => {
  return (
    <Flex
      direction="column"
      bg="radial-gradient(94.21% 111.98% at 101.22% -41.31%, #CB27A6 0%, #CB27A6 0.04%, #7626EA 100%)"
      transform={'matrix(1, 0, 0, -1, 0, 0)'}
      h="140px"
      p="16px"
      position="fixed"
      top="0"
      right="0"
      left="0"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="10px"
        transform={'matrix(1, 0, 0, -1, 0, 0)'}
      >
        <Logo />

        <Box mt="22px" w="100" overflowX="auto">
          {list && <Breadcrumbs list={list} />}
          {content && content}
        </Box>
      </Flex>
    </Flex>
  )
}
