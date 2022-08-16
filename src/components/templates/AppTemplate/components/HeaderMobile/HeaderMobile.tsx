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
      bg="primary"
      h="130px"
      p="16px"
      position="fixed"
      top="0"
      right="0"
      left="0"
    >
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Logo />

        <Box mt="22px" w="100" overflowX="auto">
          {list && <Breadcrumbs list={list} />}
          {content && content}
        </Box>
      </Flex>
    </Flex>
  )
}
