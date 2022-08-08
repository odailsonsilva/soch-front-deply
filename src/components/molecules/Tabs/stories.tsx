/* eslint-disable react/jsx-key */
import { Story, Meta } from '@storybook/react'
import Tabs from '.'

export default {
  title: 'Tabs',
  component: Tabs
} as Meta

export const Default: Story = () => (
  <Tabs tabs={['1', '2']} content={[<div>1</div>, <div>2</div>]} />
)
