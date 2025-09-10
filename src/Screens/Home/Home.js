import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import HeaderPadre from "../../Componentes/HeaderPadre/HeaderPadre";
import PopularesPadre from "../../Componentes/PopularesPadre/PopularesPadre";

function Home(){
  return (
    <React.Fragment>
      <HeaderPadre />
      <PopularesPadre/>
      <h1>Home page</h1>
    
      <Footer />
    </React.Fragment>
  );
}

export default Home;
