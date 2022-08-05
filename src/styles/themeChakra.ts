import { extendTheme } from '@chakra-ui/react'

export const themeChakra = extendTheme({
  colors: {
    primary: '#0162e8',
    backgroundGray: '#F7F7F7',
    blue: {
      300: '#0162e8'
    },
    gray: {
      300: '#6e6b7b'
    }
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Montserrat', sans-serif",
    fontSize: '0.875rem',
    color: '#6e6b7b'
  }
})
