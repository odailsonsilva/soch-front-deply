import { Story, Meta } from '@storybook/react'
import CheckIcon from 'assets/images/icons/check-circle.svg'
import { ReactSVG } from 'react-svg'
import ButtonAction from '.'

export default {
  title: 'ButtonAction',
  component: ButtonAction
} as Meta

export const Default: Story = () => (
  <ButtonAction
    label="Exercícios"
    iconLeft={
      <ReactSVG
        src={CheckIcon}
        color="red"
        stroke="red"
        fill="red"
        wrap="div"
      />
    }
    iconTypeRight="next"
    variantIcon="pink"
  />
)
