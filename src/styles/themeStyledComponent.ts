import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 ${({ theme }) => css`
   @font-face {
     font-family: 'Spline Sans';
     src: url('../assets/fonts/SplineSans-Regular.woff2') format('woff2');
     font-style: normal;
     font-weight: 400;
   }

   @font-face {
     font-family: 'Spline Sans';
     src: url('../assets/fonts/SplineSans-Medium.woff2') format('woff2');
     font-style: normal;
     font-weight: 500;
   }

   @font-face {
     font-family: 'Spline Sans';
     src: url('../assets/fonts/SplineSans-SemiBold.woff2') format('woff2');
     font-style: normal;
     font-weight: 600;
   }

   @font-face {
     font-family: 'Spline Sans';
     src: url('../assets/fonts/SplineSans-Bold.woff2') format('woff2');
     font-style: normal;
     font-weight: 900;
   }

   body,
   input,
   textarea,
   button {
     font-family: 'Spline Sans', sans-serif;
     font-size: 1.6rem;
     font-weight: 400;
   }
 `}
`

export default GlobalStyles
