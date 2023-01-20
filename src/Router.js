import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Error from "./components/Error";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import SeccionPruebas from './components/SeccionPruebas';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Search from "./components/Search";

class Router extends Component {
    render() {

        return (
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={
                        (props) => {
                            var search = props.match.params.search;
                            return (
                            <Redirect to={'/blog/busqueda/'+search}/>
                            );

                        }
                    } />
                    <Route exact path="/blog/articulo/:id" render={ () => (
                        <h1>Pagina Individual</h1>
                    ) }
                        
                    />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/peliculas" component={Peliculas} />


                    <Route exact path="/segunda-ruta" component={MiComponente} />

                    <Route exact path="/pruebas/:id/:nombre/:apellido?" render={(props) => {

                        var id = props.match.params.id;
                        var nombre = props.match.params.nombre;
                        var apellido = props.match.params.apellido;

                        return (
                            <div id="content">
                                <h1 className="subheader"> Pagina de pruebas!</h1>
                                <h2>{id}</h2>
                                <h2>
                                    {nombre && !apellido &&
                                        <span> {nombre} {apellido}</span>
                                    }
                                </h2>
                                <h2>
                                    {nombre && apellido &&
                                        <span> {nombre} {apellido}</span>
                                    }
                                </h2>
                            </div>
                        );

                    }
                    }
                    />
                    <Route component={Error} />

                </Switch>

                <div className='clearfix'></div>

                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;