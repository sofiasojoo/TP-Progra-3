import React, { Component } from "react";
import { Link } from "react-router-dom";

class CarteleraHijo extends Component {
  constructor(props) {
    super(props);
    this.state = {
     info: this.props
    };
  }

  render() {
    

    return (
      <article className="ccard">
        <img
          className="card__img"
          src={`https://image.tmdb.org/t/p/w500${this.props.info.poster_path}`}
          alt={this.props.info.title}
        />
        <h2>{this.props.info.title}</h2>
        <p>{this.props.info.overview}</p>
         <Link to ={`/cartelera/detalle/${this.props.info.id}`}>Detalle</Link>
         <Link to ={""}>Ver Descripcion</Link>
         <Link to ={""}>Agregar a favoritos</Link>
      </article>
    );
  }
}

export default CarteleraHijo;
