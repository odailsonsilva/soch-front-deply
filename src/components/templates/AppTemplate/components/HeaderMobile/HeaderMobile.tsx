import { Box, Flex, Text } from '@chakra-ui/react'
import { Logo } from 'components/atoms'
import { Breadcrumbs } from 'components/molecules'
import { IListBreadcrumb } from 'components/molecules/Breadcrumbs'

interface IHeaderMobileParams {
  list: IListBreadcrumb[]
}

export const HeaderMobile = ({ list }: IHeaderMobileParams) => {
  return (
    <Flex direction="column" bg="primary" h="130px" p="16px">
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Logo />

        <Box mt="22px">
          <Breadcrumbs list={list} />
        </Box>
      </Flex>
    </Flex>
  )
}
