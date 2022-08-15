import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1045px',
  '2xl': '1536px'
}

export const themeChakra = extendTheme({
  colors: {
    primary: '#7626EA',
    secondary: '#FF669D',
    text: '#242020',
    backgroundGray: '#F5F5F5',
    gray: {
      100: '#EDEDED',
      200: '#A0A0A0',
      300: '#676767',
      400: '#D9D9D9',
      500: '#676767'
    },
    purple: {
      100: '#DDC8FA'
    },
    primaryScheme: {
      100: '#7626EA',
      200: '#7626EA',
      300: '#7626EA',
      400: '#7626EA',
      500: '#7626EA',
      600: '#7626EA',
      700: '#7626EA',
      800: '#7626EA',
      900: '#7626EA'
    },
    pinkSystem: {
      100: 'rgba(255, 102, 157, 0.18)'
    },
    yellowSystem: {
      100: 'rgba(253, 198, 2, 0.15)'
    },
    primarySystem: {
      100: 'rgba(118, 38, 234, 0.15)'
    }
  },
  fonts: {
    heading: "'SplineSans-Regular', sans-serif",
    body: "'SplineSans-Regular', sans-serif",
    fontSize: '0.875rem',
    color: '#242020'
  },
  shadows: { outline: '0 0 0 3px rgba(118, 38, 234, 0.5)' }
})
