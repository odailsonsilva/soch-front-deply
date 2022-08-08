import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { ReactSVG } from 'react-svg'
import { NavData } from 'constants/nav'

export const NavItem = ({ icon, iconLib, name, to }: NavData) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Flex
      width={isMobile ? 'max-content' : '196px'}
      as="button"
      gap={isMobile ? '0' : '8px'}
      height={isMobile ? '46px' : '48px'}
      align="center"
      padding={isMobile ? '4px' : '10px'}
      borderRadius="8px"
      transition="all 0.2s ease"
      border="none"
      flexDirection={isMobile ? 'column' : 'row'}
      _hover={{ background: 'secondary', cursor: 'pointer' }}
      {...(isMobile && {
        minWidth: '80px'
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
    </Flex>
  )
}
