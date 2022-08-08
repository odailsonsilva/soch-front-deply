import { Story, Meta } from '@storybook/react'
import Button from '.'
import { FiChevronRight } from 'react-icons/fi'
import { Flex, Text } from '@chakra-ui/react'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story = () => (
  <Button>
    <Flex alignItems="center">
      <Text mr="1">Próximo momento </Text>
      <FiChevronRight size={20} />
    </Flex>
  </Button>
)
