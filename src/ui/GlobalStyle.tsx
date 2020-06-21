import { Global, css } from "@emotion/core";

const styles = css`
  html {
    font-size: 16px;
    background: #f6f4f1;
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
