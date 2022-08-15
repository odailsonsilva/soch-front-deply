import {
  Box,
  Breadcrumb as BreadcrumbChakra,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
  useMediaQuery
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export interface IListBreadcrumb {
  icon?: React.ReactElement
  text: string
  link: string
}

export interface IBreadcrumbsParams {
  list: IListBreadcrumb[]
}
const Breadcrumbs = ({ list }: IBreadcrumbsParams) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <BreadcrumbChakra
      separator={
        <FiChevronRight size={25} color={isMobile ? 'white' : '#D9D9D9'} />
      }
      color={isMobile ? 'white' : 'gray.200'}
    >
      {list.map((item, index) => {
        if (!isMobile) {
          return (
            <BreadcrumbItem
              key={item.text}
              isCurrentPage={index === list.length - 1}
              marginTop="3px"
              shadow="none !important"
              outline="none !important"
            >
              <Flex gap="8px">
                {item?.icon && <Box>{item.icon}</Box>}
                <BreadcrumbLink as={Link} to={item.link}>
                  <Text
                    fontWeight={900}
                    fontSize={isMobile ? '1rem !important' : '1.25rem'}
                    color={index === list.length - 1 ? '#676767' : 'gray.200'}
                  >
                    {item.text}
                  </Text>
                </BreadcrumbLink>
              </Flex>
            </BreadcrumbItem>
          )
        }

        if (
          isMobile &&
          (index === list.length - 1 || index === list.length - 2)
        ) {
          return (
            <BreadcrumbItem
              key={item.text}
              isCurrentPage={index === list.length - 1}
              marginTop="3px"
              shadow="none !important"
              outline="none !important"
            >
              <Flex gap="8px">
                {item?.icon && <Box>{item.icon}</Box>}
                <BreadcrumbLink
                  as={Link}
                  to={item.link}
                  shadow="none !important"
                  outline="none !important"
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: isMobile ? '1rem' : '1.25rem',
                      color:
                        index === list.length - 1
                          ? '#FFFFFF'
                          : 'rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    {item.text}
                  </p>
                </BreadcrumbLink>
              </Flex>
            </BreadcrumbItem>
          )
        }
      })}
    </BreadcrumbChakra>
  )
}

export default Breadcrumbs
