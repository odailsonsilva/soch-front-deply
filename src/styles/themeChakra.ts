import { extendTheme } from '@chakra-ui/react'

export const themeChakra = extendTheme({
  colors: {
    primary: '#7626EA',
    secondary: '#FF669D',
    text: '#242020',
    backgroundGray: '#F5F5F5',
    gray: {
      100: '#EDEDED',
      200: '#A0A0A0',
      300: '#676767'
    },
    purple: {
      100: '#DDC8FA'
    }
  },
  fonts: {
    heading: "'Spline Sans', sans-serif",
    body: "'Spline Sans', sans-serif",
    fontSize: '0.875rem',
    color: '#242020'
  }
})
