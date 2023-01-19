import React, { Component } from "react";
import logo from '../assets/images/logo.svg';
import { NavLink } from "react-router-dom";

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink activeClassName="active-menu" to="/home">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-menu" to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-menu" to="/formulario">Formulario</NavLink>
                            </li>
                            <li>
                            <NavLink activeClassName="active-menu" to="/peliculas">Peliculas</NavLink>
                            </li>
                            <li>
                            <NavLink activeClassName="active-menu" to="/pruebas/321/Dwights/Schrutte">Pagina 2</NavLink>
                            </li>
                        </ul>
                    </nav>

                
                    <div className="clearfix"></div>
                </div>
            </header>
        )
    }
}

export default Header;