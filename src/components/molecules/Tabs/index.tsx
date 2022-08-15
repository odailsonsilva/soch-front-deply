import {
  Tabs as TabsChakra,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex
} from '@chakra-ui/react'

export interface ITabs {
  tabs: React.ReactElement[]
  content: React.ReactElement[]
}

const Tabs = ({ tabs, content }: ITabs) => (
  <TabsChakra
    direction="rtl"
    colorScheme="primaryScheme"
    borderColor="gray.100"
    flex={1}
    display="flex"
    flexDirection="column"
  >
    <TabList>
      {tabs.map((item, index) => (
        <Tab
          key={String(index)}
          fontWeight="500"
          color="gray.200"
          shadow="none !important"
          outline="none !important"
          _selected={{
            shadow: 'none',
            color: 'primary',
            borderColor: 'primary',
            outline: 'none'
          }}
        >
          {item}
        </Tab>
      ))}
    </TabList>
    <TabPanels>
      {content.map((item, index) => (
        <TabPanel key={String(index)} p="0 !important" m="0 !important">
          {item}
        </TabPanel>
      ))}
    </TabPanels>
  </TabsChakra>
)

export default Tabs
