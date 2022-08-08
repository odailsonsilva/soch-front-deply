import {
  Box,
  Breadcrumb as BreadcrumbChakra,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text
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

const Breadcrumbs = ({ list }: IBreadcrumbsParams) => (
  <BreadcrumbChakra
    separator={<FiChevronRight size={25} color="#D9D9D9" />}
    color="gray.200"
  >
    {list.map((item, index) => (
      <BreadcrumbItem
        key={item.text}
        isCurrentPage={index === list.length - 1}
        marginTop="3px"
      >
        <Flex gap="8px">
          {item?.icon && <Box>{item.icon}</Box>}
          <BreadcrumbLink as={Link} to={item.link}>
            <Text fontWeight={900} fontSize="1.25rem">
              {item.text}
            </Text>
          </BreadcrumbLink>
        </Flex>
      </BreadcrumbItem>
    ))}
  </BreadcrumbChakra>
)

export default Breadcrumbs
