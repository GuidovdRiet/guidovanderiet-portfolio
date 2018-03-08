import React, { Component } from "react";
import Navigation from './Navigation';
import Link from "gatsby-link";

// Icons
import Arrow from '../Icons/Arrow.js'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Who, What, Where?</h1>
        <p>Creativiteit, onverwachte invalshoeken en humor typeren het werk van Guido van de Riet. Nadat hij zijn studie Grafisch Vormgever succesvol had afgerond, besloot hij zijn blikveld te verruimen en zich te verdiepen in de technische kanten van het vak. Met zijn studie Media technologie aan de Hogeschool van Rotterdam wil hij de samenwerking aangaan tussen designer en developer.</p>
        <Arrow />
      </div>
    )
  }
}

export default Header;