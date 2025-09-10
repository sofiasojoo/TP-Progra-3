import React, { Component } from "react";

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
      </article>
    );
  }
}

export default CarteleraHijo;
