import { Global, css } from "@emotion/core";

const styles = css`
  @font-face {
    font-family: "InterVF";
    src: url("/fonts/Inter-VF.ttf");
  }

  html {
    color: #111;
    font-size: 16px;
    font-family: "InterVF" --apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-variation-settings: "wght" 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
