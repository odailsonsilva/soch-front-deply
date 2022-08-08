import { Flex, Text } from '@chakra-ui/react'
import { Logo } from 'components/atoms'
import { Breadcrumbs } from 'components/molecules'
import { IListBreadcrumb } from 'components/molecules/Breadcrumbs'

interface IHeaderMobileParams {
  list: IListBreadcrumb[]
}

export const HeaderMobile = ({ list }: IHeaderMobileParams) => {
  return (
    <Flex direction="column" bg="primary" h="200px" p="16px">
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Logo />

        <Text color="rgba(255, 255, 255, 0.8)" mt="32px" mb="32px">
          Olá, Léo. Veja suas turmas
        </Text>

        <Breadcrumbs list={list} />
      </Flex>
    </Flex>
  )
}
