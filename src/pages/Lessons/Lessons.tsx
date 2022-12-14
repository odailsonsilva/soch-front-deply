/* eslint-disable react/jsx-key */
import {
  Flex,
  Grid,
  Heading,
  Text,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'

import { AppTemplate, Breadcrumbs, ButtonAction, Icon } from 'components'
import { IListBreadcrumb } from 'components/molecules/Breadcrumbs'
import { FiUsers } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { mock } from './mock'

const list: IListBreadcrumb[] = [
  {
    link: '/',
    text: 'Turma 1º A'
  },
  {
    link: '/aulas',
    text: 'Aulas'
  }
]

const Lessons = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const navigation = useNavigate()

  const hearderContent = () => {
    return (
      <>
        <Flex alignItems="center" gap="14px">
          <Icon icon="MultiUser" size={25} color="#A0A0A0" />

          <Breadcrumbs list={list} />
        </Flex>
      </>
    )
  }

  return (
    <AppTemplate headerContent={hearderContent()} list={list}>
      <Grid
        w="100%"
        p="20px 0px"
        templateColumns={{
          base: '1fr',
          sm: '1fr',
          md: '1fr',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)'
        }}
        gap={isMobile ? '16px' : '32px'}
      >
        {mock.map((item) => (
          <ButtonAction
            onClick={() => navigation('/aulas/operacoes-basicas')}
            key={item.label}
            {...item}
          />
        ))}
      </Grid>
    </AppTemplate>
  )
}

export default Lessons
