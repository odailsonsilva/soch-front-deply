import {
  Tabs as TabsChakra,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'

export interface ITabs {
  tabs: string[]
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
      {tabs.map((item) => (
        <Tab
          key={item}
          fontWeight="500"
          color="gray.200"
          _selected={{
            shadow: 'red',
            color: 'primary',
            borderColor: 'primary',
            outline: 'primary'
          }}
        >
          {item}
        </Tab>
      ))}
    </TabList>
    <TabPanels flex="1">
      {content.map((item, index) => (
        <TabPanel key={String(index)} h="100%">
          {item}
        </TabPanel>
      ))}
    </TabPanels>
  </TabsChakra>
)

export default Tabs
