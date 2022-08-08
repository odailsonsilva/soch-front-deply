import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter } from 'react-router-dom';
import { themeChakra } from '../src/styles/themeChakra'

export const decorators = [
  (Story) => (
    <ChakraProvider theme={themeChakra}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ChakraProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs"
}
