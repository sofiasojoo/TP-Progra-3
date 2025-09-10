import PopularesHijo from "../PopularesHijo/PopularesHijo";
import React, {Component} from "react";

class PopularesPadre extends Component{
   constructor (props){
    super(props);
    this.state = {
    data: [],
   
  }

}
componentDidMount() {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=f4ad59c0cc0090a701bfacb893f62a83&language=es-ES&page=1")

    .then((response) => response.json())
    .then((data) => {
      console.log("datos", data);           
      this.setState({ data: data.results }); 
    })
    .catch((error) => console.log("El error fue: " + error));
}

evitarSubmit(event) {
    event.preventDefault();
  }

controlarCambios(event) {
    this.setState({valor: event.target.value});
  }

render()
{
  
  return (
    
  <div>
    
     <form onSubmit={(event)=>this.evitarSubmit(event)}>
       <label>Name: </label>
       <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
       <input type="submit" value="Submit" />
     </form>
    <section className="character-card">
        {this.state.data === "" ? 
        <h3>Cargando...</h3> : 
        <h3 className="character-card">
            {this.state.data.map((item, index) => 
            {if (index < 4) {
                return <PopularesHijo key={item.id} info={item} />;
            } else {
                return ""; 
            }
})}</h3>}
    </section> 
    </div>
     
    )}}



export default  PopularesPadre