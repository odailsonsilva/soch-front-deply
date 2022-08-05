import { ChakraProvider } from '@chakra-ui/react'
import { themeChakra } from 'styles/themeChakra'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from 'navigation/routes'
import { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback={() => 'loading...'}>
      <BrowserRouter>
        <ChakraProvider theme={themeChakra}>
          <Routes />
        </ChakraProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
