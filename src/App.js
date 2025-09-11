import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Home from "./Screens/Home/Home";
import Favoritos from "./Screens/Favoritos/Favoritos";
import Populares from "./Screens/Populares/Populares";
import Cartel from "./Screens/Cartel/Cartel";
import PopularesDetalle from "./Screens/PopularesDetalle/PopularesDetalle";
import CarteleraDetalle from "./Screens/CarteleraDetalle/CarteleraDetalle";



function App() {
  return (
    <React.Fragment>

    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/favoritos" exact={true} component={Favoritos}/>
      <Route path="/populares" exact={true} component={Populares}/>
      <Route path="/populares/detalle/:id" exact={true} component={PopularesDetalle}/>
      <Route path="/cartelera" exact={true} component={Cartel}/>
      <Route path="/cartelera/detalle/:id" exact={true} component={CarteleraDetalle}/>
    </Switch>
    
  </React.Fragment>

  );

}

export default App;
