import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import HeaderPadre from "../../Componentes/HeaderPadre/HeaderPadre";
import PopularesPadre from "../../Componentes/PopularesPadre/PopularesPadre";

function Populares(){
  return (
    <React.Fragment>
      <HeaderPadre />
      <h1>Peliculas mas populares</h1>

      <PopularesPadre/>
    
      <Footer />
    </React.Fragment>
  );
}

export default Populares;