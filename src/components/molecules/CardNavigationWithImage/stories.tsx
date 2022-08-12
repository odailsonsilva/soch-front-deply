import { Story, Meta } from '@storybook/react'
import { CardNavigationWithImage, ICardNavitationWithImage } from '.'
import ImageIcon from 'assets/images/classes.svg'

export default {
  title: 'CardNavigationWithImage',
  component: CardNavigationWithImage
} as Meta

const mock: ICardNavitationWithImage = {
  src: ImageIcon,
  name: 'Aulas',
  to: '/',
  background: 'yellow'
}

export const Default: Story = () => <CardNavigationWithImage {...mock} />
