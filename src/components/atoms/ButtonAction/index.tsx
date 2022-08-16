import {
  Button as ButtonChakra,
  ButtonProps,
  Flex,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'

import UploadFile from 'assets/images/icons/upload.svg'
import { useMemo } from 'react'
import { ReactSVG } from 'react-svg'

import { Button } from './styles'

type IconTypeRight = 'upload' | 'next'

const colorsVariant = {
  pink: 'pinkSystem.100',
  gray: 'gray.100',
  yellow: 'yellowSystem.100',
  violet: 'primarySystem.100'
}

export type IVariantIcon = 'pink' | 'gray' | 'yellow' | 'violet'
export interface IButtonActionParams extends ButtonProps {
  iconLeft: React.ReactNode
  label: string
  iconTypeRight: IconTypeRight
  description?: string
  value?: string
  variantIcon?: IVariantIcon
}

const ButtonAction = ({
  iconLeft,
  label,
  iconTypeRight,
  variantIcon = 'gray',
  description,
  ...rest
}: IButtonActionParams) => {
  const renderIcon = useMemo(() => {
    switch (iconTypeRight) {
      case 'upload':
        return <ReactSVG src={UploadFile} />
      case 'next':
        return <FiChevronRight size={25} color="#A0A0A0" />
    }
  }, [iconTypeRight])

  return (
    <Button
      {...rest}
      variantIcon={variantIcon}
      w="100%"
      minH="72px"
      display="flex"
      borderRadius="16px"
      border="2px solid #EDEDED"
      alignItems="center"
      justifyContent="space-between"
      background="white"
      shadow="none !important"
      outline="none !important"
      filter="none"
      _hover={{
        background: 'none',
        filter: 'none'
      }}
      _active={{
        bg: '#fff',
        borderColor: '#bec3c9',
        outline: 'none'
      }}
    >
      <HStack spacing="20px">
        <Flex
          p="8px"
          w="40px"
          h="40px"
          alignItems="center"
          justifyContent="center"
          background={colorsVariant[variantIcon]}
          borderRadius="8px"
        >
          {iconLeft}
        </Flex>

        <VStack justifyContent="flex-start" alignItems="flex-start" ml="24px">
          {description && (
            <Text color="#A0A0A0" fontSize="14px">
              {description}
            </Text>
          )}
          <Text color="text" fontWeight="500" isTruncated>
            {label}
          </Text>
        </VStack>
      </HStack>

      {renderIcon}
    </Button>
  )
}

export default ButtonAction
