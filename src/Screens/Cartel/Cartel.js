import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import HeaderPadre from "../../Componentes/HeaderPadre/HeaderPadre";

function Cartel(){
  return (
    <React.Fragment>
      <HeaderPadre />
      <h1>Peliculas en Cartel</h1>
    
      <Footer />
    </React.Fragment>
  );
}

export default Cartel;