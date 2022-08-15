import { ChakraProvider } from '@chakra-ui/react'
import { themeChakra } from 'styles/themeChakra'
import { BrowserRouter } from 'react-router-dom'
import styled from '@emotion/styled'

import { Routes } from 'navigation/routes'
import { Suspense } from 'react'
import { SelectedClasseProvider } from 'context/use-selected-classe'
import '@fontsource/spline-sans'

const AppContainer = styled.div`
  font-family: 'Spline Sans', sans-serif;
`

function App() {
  return (
    <Suspense fallback={() => 'loading...'}>
      <BrowserRouter>
        <ChakraProvider theme={themeChakra}>
          <AppContainer>
            <SelectedClasseProvider>
              <Routes />
            </SelectedClasseProvider>
          </AppContainer>
        </ChakraProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
