import { Story, Meta } from '@storybook/react'
import { Icon } from '.'

export default {
  title: 'Icon',
  component: Icon
} as Meta

export const Default: Story = () => <Icon icon="MultiUser" />
