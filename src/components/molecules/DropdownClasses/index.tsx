import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  useMediaQuery,
  HStack
} from '@chakra-ui/react'
import { ButtonAction } from 'components/atoms'
import { useSelectedClasse } from 'context/use-selected-classe'
import { FiChevronDown } from 'react-icons/fi'
import MultiUser from 'assets/images/icons/multi-user.svg'
import { mock } from './mock'
import { ReactSVG } from 'react-svg'

import * as S from './styles'

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
          <HStack>
            <S.Icon isMobile={isMobile}>
              <ReactSVG src={MultiUser} />
            </S.Icon>

            <Text fontWeight="700" color={isMobile ? '#fff' : 'primary'}>
              {selectedClasse}
            </Text>
          </HStack>
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
