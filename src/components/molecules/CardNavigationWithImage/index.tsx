import {
  Box,
  BoxProps,
  Flex,
  Image,
  Text,
  useMediaQuery
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const colorsVariant = {
  // pink: 'pinkSystem.100',
  // gray: 'gray.100',
  yellow: 'yellowSystem.100',
  violet: 'primarySystem.100'
}

type IBackgroundImage = 'yellow' | 'violet'

export interface ICardNavitationWithImage extends BoxProps {
  src: string
  name: string
  to: string
  background: IBackgroundImage
}

export const CardNavigationWithImage = ({
  src,
  name,
  to,
  background
}: ICardNavitationWithImage) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Link to={to}>
      <Flex
        flexDirection="column"
        border="2px solid #EDEDED"
        borderRadius="16px"
        maxWidth={isMobile ? '100%' : '363px'}
        height={isMobile ? '130px' : '250px'}
        width="100%"
      >
        <Box
          background={colorsVariant[background]}
          borderRadius="16px 16px 0px 0px"
          w="100%"
          height={isMobile ? '66px' : '100%'}
        >
          <Image
            src={src}
            alt={name}
            objectFit="cover"
            {...(isMobile && {
              height: '66px'
            })}
            borderRadius="13px 13px 0px 0px"
          />
        </Box>

        <Flex
          flexDirection="row"
          justifyContent="space-between"
          align="center"
          h="56px"
          p="20px 14px"
          borderRadius="0px 0px 16px 16px"
          transition="all 0.2s ease"
        >
          <Text fontWeight="500">{name}</Text>
          <FiChevronRight size={25} color={'#A0A0A0'} />
        </Flex>
      </Flex>
    </Link>
  )
}
