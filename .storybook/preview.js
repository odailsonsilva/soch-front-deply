import { ChakraProvider } from "@chakra-ui/react";
import { themeChakra } from '../src/styles/themeChakra'
import { AuthProvider } from '../src/hooks/useAuth'

export const decorators = [
  (Story) => (
    <ChakraProvider theme={themeChakra}>
      <AuthProvider>
        <Story />
      </AuthProvider>
    </ChakraProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs"
}
