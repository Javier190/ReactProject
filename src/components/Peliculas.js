import React, { Component } from "react";
import Pelicula from "./Pelicula"
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://images.hdqwalls.com/wallpapers/superman-man-of-steel-tomorrow-2020-29.jpg' },
            { titulo: 'Justice League: Zack Snyders Cut', image: 'https://gcdn.emol.cl/comics/files/2013/10/Justice-league-darkseid.jpg' },
            { titulo: 'Glass', image: 'https://www.alertageekchile.cl/wp-content/uploads/2019/02/image4.jpg' }
        ],
        year: 2023,
        creador: 'Javier Aravena',
        favorita: {}
    };

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        peliculas[0].titulo = "Batman Begins";

        this.setState = ({
            peliculas: peliculas
        });
    }

    marcarFavorita = (pelicula, indice) => {
        console.log("Favorita Marcada!");
        console.log("Pelicula marcada es: ", { pelicula }, "y Su indice es: ", indice);
        this.setState({
            favorita: pelicula
        })
    }

    render() {


        return (
            <>
                <Slider title="Peliculas"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2>Listado de Peliculas </h2>
                        <p>Seleccion de las peliculas de {this.state.creador}</p>

                        <p>
                            <button onClick={this.cambiarTitulo}>Cambiar Titulo Pelicula</button>
                        </p>

                        {this.state.favorita.titulo ? (
                            <p className="favorite-movie" style={{
                                background: 'green',
                                color: 'white',
                                padding: '15px'
                            }}>
                                <strong>Pelicula favorita</strong>
                                <br />
                                <span>{this.state.favorita.titulo}</span>
                            </p>) : (
                            <p>No hay marcada Favorita !</p>
                        )}


                        <div id="articles" className="peliculas">
                            {this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <Pelicula
                                        key={i}
                                        pelicula={pelicula}
                                        indice={i}
                                        marcarFavoritax={this.marcarFavorita} />
                                );
                            })}
                        </div>
                    </div>
                    <Sidebar blog="false" />
                </div>

            </>
        );
    }
}

export default Peliculas;