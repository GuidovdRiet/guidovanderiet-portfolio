import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { themeProvider, ThemeProvider } from "styled-components";
import { injectGlobal } from "styled-components";

import Navigation from "../components/Home/Header/Navigation";

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        margin: 0;
        background: #2A2A31;
        //-webkit-text-stroke-width: .05px;
        //-webkit-text-stroke-color: white;
        -webkit-font-smoothing: antialiased;
        font-family: 'Karla';
    }
    a {
        text-decoration: none;
    }
    ul {
      padding: 0;
    }
    h1 {
        font-size: 3em;
        font-weight: 700;
        margin-bottom: 10px;
        color: #fff;
        font-family: 'Montserrat';
    }
    h2 {
        font-size: 2.2em;
        margin-top: 8px;
        font-family: 'Montserrat';
    }
    h3 {
      font-size: 2.5em;
      font-family: 'Montserrat';
    }
    h4 {
      font-size: 2.4em;
      font-family: 'Karla';
    }
    p {
        font-size: 1.27em;
        font-family: 'Karla';
    }
`;

const theme = {
  colorMain: '#2A2A31',
  colorMainLight: '#2E2E35',
  colorMainDark: '#24242B',
  colorPurple: '#6078D7',
  colorYellow: '#E3AA3B',
  colorPink: '#E4248B',
  colorBlue: '#2BF8F7',
  colorGreen: '#2AFD74',
  colorWhite: '#fff',
  colorLightGray: '#949498',
  colorMediumGray: '3E3E42',
  colorDarkGray: '#2F2F35',
  colorBorderMain: 'rgba(148, 148, 152, 0.3)'
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
    <ThemeProvider theme={theme}>
      <div>{children()}</div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
