import {
  Button as ButtonChakra,
  ButtonProps,
  Flex,
  HStack,
  Text
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'

import UploadFile from 'assets/images/icons/upload.svg'
import { useCallback, useMemo } from 'react'
import { ReactSVG } from 'react-svg'

type IconTypeRight = 'upload' | 'next'

export interface IButtonActionParams extends ButtonProps {
  iconLeft: React.ReactNode
  label: string
  iconTypeRight: IconTypeRight
}

const ButtonAction = ({
  iconLeft,
  label,
  iconTypeRight,
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
    <ButtonChakra
      {...rest}
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
          background="gray.100"
          borderRadius="8px"
        >
          {iconLeft}
        </Flex>

        <Text color="text" fontWeight="500">
          {label}
        </Text>
      </HStack>

      {renderIcon}
    </ButtonChakra>
  )
}

export default ButtonAction
