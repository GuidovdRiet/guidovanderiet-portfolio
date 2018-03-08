import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { themeProvider, ThemeProvider } from "styled-components";
import { injectGlobal } from "styled-components";

import Navigation from "../components/Header/Navigation";

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        margin: 0;
        //-webkit-text-stroke-width: .05px;
        //-webkit-text-stroke-color: white;
        -webkit-font-smoothing: antialiased;
        font-family: 'source sans pro';
    }
    a {
        text-decoration: none;
    }
    h1 {
        font-size: 3.2em;
        font-family: 'source sans pro';
        margin-bottom: 10px;
    }
    h2 {
        font-family: 'source sans pro';
        font-size: 2.2em;
        margin-top: 8px;
    }
    p {
        font-size: 1.45em;
        font-family: 'source sans pro';
    }
`;

const theme = {
  colorMain: "#1054F5",
  colorWhite: "#fff"
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Guido van de Riet"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Navigation />
    <ThemeProvider theme={theme}>
      <div>{children()}</div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
