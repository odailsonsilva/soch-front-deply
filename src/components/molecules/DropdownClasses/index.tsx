import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Text,
  Flex,
  useMediaQuery
} from '@chakra-ui/react'
import { ButtonAction } from 'components/atoms'
import { useSelectedClasse } from 'context/use-selected-classe'
import { FiChevronDown } from 'react-icons/fi'
import { mock } from './mock'

export const DropdownClasses = () => {
  const { selectedClasse, setSelectedClasse } = useSelectedClasse()
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        w="194px"
        h="48px"
        transition="all 0.2s"
        borderRadius="16px"
        borderWidth="2px"
        borderColor={isMobile ? 'rgba(255, 255, 255, 0.25)' : '#DDC8FA'}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text color={isMobile ? '#fff' : 'primary'}>{selectedClasse}</Text>
          <FiChevronDown size={22} color={isMobile ? '#fff' : '#7626EA'} />
        </Flex>
      </MenuButton>

      <MenuList
        borderRadius="24px"
        bg="#fbfbfb"
        border="none"
        w={isMobile ? '280px' : '310px'}
        boxShadow="0px 4px 16px rgba(0, 0, 0, 0.08)"
        maxHeight="70vh"
        overflow="auto"
        left="0"
      >
        {mock.map((item) => (
          <MenuItem
            key={item.label}
            _hover={{ background: 'none' }}
            onClick={() => setSelectedClasse(item.value!)}
          >
            <ButtonAction {...item} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
