import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
     @font-face {
  font-family: "Spline Sans";
  src: url("./fonts/SplineSans-Light.woff2") format("woff2");
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: "Spline Sans";
  src: url("./fonts/SplineSans-Regular.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Spline Sans";
  src: url("./fonts/SplineSans-Medium.woff2") format("woff2");
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: "Spline Sans";
  src: url("./fonts/SplineSans-SemiBold.woff2") format("woff2");
  font-style: normal;
  font-weight: 600;
}

@font-face {
  font-family: "Spline Sans";
  src: url("./fonts/SplineSans-Bold.woff2") format("woff2");
  font-style: normal;
  font-weight: 900;
}


@font-face {
  font-family: "Spline Sans";
  src: url("../assets/fonts/SplineSans-Light.woff2") format("woff2");
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: "Spline Sans";
  src: url("../assets/fonts/SplineSans-Regular.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Spline Sans";
  src: url("../assets/fonts/SplineSans-Medium.woff2") format("woff2");
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: "Spline Sans";
  src: url("../assets/fonts/SplineSans-SemiBold.woff2") format("woff2");
  font-style: normal;
  font-weight: 600;
}

@font-face {
  font-family: "Spline Sans";
  src: url("../assets/fonts/SplineSans-Bold.woff2") format("woff2");
  font-style: normal;
  font-weight: 900;
}

      `}
  />
)

export default Fonts
