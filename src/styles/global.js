import { createGlobalStyle } from "styled-components";

// import loadingImg from "~/assets/loading.gif";

export const colors = {
  primary: "#202020",
  red: "#e62429",
  // secondary: "#cdd3d8",
  // success: "#63ed7a",
  // info: "#3abaf4",
  // warning: "#ffa426",
  // danger: "#fc544b",
  // light: "#e3eaef",
  // grey: "#868e96",
  // whitesmoke: "#f7f9f9",
  // dark: "#191d21",
  // muted: "#98a6ad",
  // body: "#f4f6f9",
  // font: "#6c757d",
  // fontdark: "#34395e",
  // white: "#ffffff",
};

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

  body,
  html {
    padding: 0;
    margin: 0;
  }

  body {
    padding-top: 100px;
  }

  body {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${colors.primary};
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }

  .container {
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 15px;
    width: 100%;
  }

  a:hover {
    text-decoration: none;
  }

  button {
    outline: none;
    border: 0;
    padding: 0;
  }
`;
