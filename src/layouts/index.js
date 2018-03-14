import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { themeProvider, ThemeProvider } from "styled-components";
import { injectGlobal } from "styled-components";

import Navigation from "../components/Home/Header/Navigation";

injectGlobal`
    * {
        box-sizing: border-box;
        font-family: 'karla';
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        margin: 0;
        //-webkit-text-stroke-width: .05px;
        //-webkit-text-stroke-color: white;
        -webkit-font-smoothing: antialiased;
    }
    a {
        text-decoration: none;
    }
    ul {
      padding: 0;
    }
    h1 {
        font-size: 3.4em;
        font-weight: 700;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 2.2em;
        margin-top: 8px;
    }
    p {
        font-size: 1.45em;
    }
`;

const theme = {
  colorMain: '#061616',
  colorSecundary: '#5F75DD',
  colorWhite: '#fff',
  colorLightGray: '#C7C7C7',
  colorMediumGray: '#323333',
  colorDarkGray: '#181E1E',
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
