import { ChakraProvider } from '@chakra-ui/react'
import { themeChakra } from 'styles/themeChakra'
import themeStyledComponents from 'styles/themeStyledComponent'
import { BrowserRouter } from 'react-router-dom'
import styled from '@emotion/styled'

import { Routes } from 'navigation/routes'
import { Suspense } from 'react'
import { SelectedClasseProvider } from 'context/use-selected-classe'
import '@fontsource/spline-sans'
import { ThemeProvider } from 'styled-components'

const AppContainer = styled.div`
  font-family: 'Spline Sans', sans-serif;
`

function App() {
  return (
    <Suspense fallback={() => 'loading...'}>
      <BrowserRouter>
        <ChakraProvider theme={themeChakra}>
          <ThemeProvider theme={themeStyledComponents}>
            <AppContainer>
              <SelectedClasseProvider>
                <Routes />
              </SelectedClasseProvider>
            </AppContainer>
          </ThemeProvider>
        </ChakraProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
