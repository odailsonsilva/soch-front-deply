import { Story, Meta } from '@storybook/react'
import { FiUsers } from 'react-icons/fi'
import Breadcrumbs, { IListBreadcrumb } from '.'

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs
} as Meta

const list: IListBreadcrumb[] = [
  {
    link: '/',
    text: 'Turma 1º A'
  },
  {
    link: '/',
    text: 'Aulas'
  },
  {
    link: '/',
    text: 'Operações Básicas'
  },
  {
    link: '/',
    text: 'TSistema decimal'
  }
]

export const Default: Story = () => <Breadcrumbs list={list} />
