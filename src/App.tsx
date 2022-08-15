import { ChakraProvider } from '@chakra-ui/react'
import { themeChakra } from 'styles/themeChakra'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from 'navigation/routes'
import { Suspense } from 'react'
import { SelectedClasseProvider } from 'context/use-selected-classe'

function App() {
  return (
    <Suspense fallback={() => 'loading...'}>
      <BrowserRouter>
        <ChakraProvider theme={themeChakra}>
          <SelectedClasseProvider>
            <Routes />
          </SelectedClasseProvider>
        </ChakraProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
