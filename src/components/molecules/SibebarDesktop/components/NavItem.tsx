import { Flex, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import { ReactSVG } from 'react-svg'
import { NavData } from 'constants/nav'
import { useLocation } from 'react-router-dom'

export const NavItem = ({ icon, iconLib, name, to }: NavData) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const { pathname } = useLocation()

  const isCurrentPage = to !== '/acompanhamento' && to !== '/profile'

  return (
    <Stack
      display="flex"
      spacing="0"
      width={isMobile ? 'max-content' : '196px'}
      as="button"
      gap={isMobile ? '0' : '8px'}
      height={isMobile ? '46px' : '48px'}
      align="center"
      padding={isMobile ? '4px' : '10px'}
      borderRadius="8px"
      transition="all 0.2s ease"
      border="none"
      direction={isMobile ? 'column' : 'row'}
      _hover={{ background: 'secondary', cursor: 'pointer' }}
      {...(isMobile && {
        minWidth: '80px',
        justifyContent: 'space-between'
      })}
      {...(isCurrentPage && {
        background: 'secondary',
        cursor: 'pointer'
      })}
    >
      {icon && (
        <ReactSVG
          src={icon}
          {...(isMobile && {
            width: '24px',
            height: '24px'
          })}
        />
      )}

      {iconLib && iconLib}

      <Text color="white" fontSize={isMobile ? '0.75rem' : '1rem'}>
        {name}
      </Text>
    </Stack>
  )
}
