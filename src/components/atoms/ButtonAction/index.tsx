import {
  Button as ButtonChakra,
  ButtonProps,
  Flex,
  HStack,
  Text
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
  variantIcon?: IVariantIcon
}

const ButtonAction = ({
  iconLeft,
  label,
  iconTypeRight,
  variantIcon = 'gray',
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
      h="72px"
      display="flex"
      shadow="none"
      outline="none"
      shadows={{ outline: 'none' }}
      borderRadius="16px"
      border="2px solid #EDEDED"
      alignItems="center"
      justifyContent="space-between"
      background="white"
      _hover={{
        background: 'white'
      }}
      _actived={{
        background: 'white'
      }}
      _selected={{
        background: 'white'
      }}
    >
      <HStack>
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

        <Text color="text" fontWeight="500">
          {label}
        </Text>
      </HStack>

      {renderIcon}
    </Button>
  )
}

export default ButtonAction
