import React, { Component } from "react";


class Pelicula extends Component {

    marcarFav = () => {
        this.props.marcarFavoritax(this.props.pelicula, this.props.indice);
    }

    render() {

        const pelicula = this.props.pelicula;
        const { titulo, image } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo}/>
                </div>

                <h2>{titulo} </h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>
                <button onClick={this.marcarFav}>
                    Marcar Favorita
                </button>
                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Pelicula;