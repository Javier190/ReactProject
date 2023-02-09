import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";
import PortafolioHome from "./PortafolioHome";

class Home extends Component {
    render() {
        var buttonString = "Ver mas";
        return (

            <div id="home">
                <Slider btn={buttonString} testprops="Esto es otra prueba" 
                title="Portafolio ReactJS de Javier Aravena" 
                size="slider-big"
                />
                <PortafolioHome/>

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos Articulos !!</h1>
                        <Articles
                        home="true"
                        />
                    </div>

                    <Sidebar />
                </div>
                
            </div>
        );
    }
}

export default Home;