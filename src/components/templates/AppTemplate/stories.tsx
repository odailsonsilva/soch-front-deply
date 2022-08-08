import { Story, Meta } from '@storybook/react'
import AppTemplate from '.'

export default {
  title: 'AppTemplate',
  component: AppTemplate
} as Meta

export const Default: Story = () => <AppTemplate>conteudo</AppTemplate>
