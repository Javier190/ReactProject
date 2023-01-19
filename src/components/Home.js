import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Home extends Component {
    render() {
        var buttonString = "Ver mas";
        return (

            <div id="home">
                <Slider btn={buttonString} testprops="Esto es otra prueba" 
                title="Bienvenido al Curso de React JS realizado por Javier Aravena" 
                size="slider-big"
                />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos Articulos !!</h1>
                    </div>

                    <Sidebar />
                </div>
                
            </div>
        );
    }
}

export default Home;