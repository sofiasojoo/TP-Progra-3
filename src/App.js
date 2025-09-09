import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Home from "./Screens/Home/Home";
import Favoritos from "./Screens/Favoritos/Favoritos";
import Populares from "./Screens/Populares/Populares";
import Cartel from "./Screens/Cartel/Cartel";



function App() {
  return (
    <React.Fragment>

    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/favoritos" exact={true} component={Favoritos}/>
      <Route path="/populares" exact={true} component={Populares}/>
      <Route path="/cartel" exact={true} component={Cartel}/>
    </Switch>
    
  </React.Fragment>

  );

}

export default App;
