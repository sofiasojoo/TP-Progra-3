import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import HeaderPadre from "../../Componentes/HeaderPadre/HeaderPadre";
import PopularesPadre from "../../Componentes/PopularesPadre/PopularesPadre";
import CarteleraPadre from "../../Componentes/CarteleraPadre/CarteleraPadre";

function Home(){
  return (
    <React.Fragment>
      <HeaderPadre />
      <h1>Peliculas populares</h1>
      <PopularesPadre/>
      <h1>Peliculas en Cartelera</h1>
      <CarteleraPadre/>
     
    
      <Footer />
    </React.Fragment>
  );
}

export default Home;
