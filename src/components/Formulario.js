import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    bioRef = React.createRef();
    radioButtonMenRef = React.createRef();
    radioButtonWomenRef = React.createRef();
    radioButtonOtherRef = React.createRef();

    state = {
        user: {}
    }

    sendForm = (e) => {
        e.preventDefault();

        var genre = 'hombre';


        if (this.radioButtonMenRef.current.checked) {
            genre = this.radioButtonMenRef.current.value;
        } else if (this.radioButtonWomenRef.current.checked) {
            genre = this.radioButtonWomenRef.current.value;
        } else if (this.radioButtonOtherRef.current.checked) {
            genre = this.radioButtonOtherRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            bio: this.bioRef.current.value,
            genero: genre
        }

        this.setState({
            user: user
        })

        console.log("SendForm Method has been triggered !");
        console.log(" Datos del formulario del usuario: ", user);
    }

    render() {
        var buttonString = "Ver mas";
        if (this.state.user.nombre) {
            var user = this.state.user;
        }

        return (

            <div id="formulario">


                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                        {/* Mostrar Datos de Formulario Siempre y cuando este el dato User/Nombre */}

                        {
                            this.state.user.nombre &&

                            <>
                                <div id="user-data">
                                    <p>Nombre: <strong>{user.nombre} </strong> </p>
                                </div><div id="user-data">
                                    <p>Apellido: <strong>{user.apellido} </strong> </p>
                                </div><div id="user-data">
                                    <p>Bio: <strong>{user.bio} </strong> </p>
                                </div><div id="user-data">
                                    <p>Sexo: <strong>{user.genero} </strong> </p>
                                </div>
                            </>
                        }


                        {/*Listado de articulos que vendran de la API*/}

                        <form className="mid-form" onChange={this.sendForm} onSubmit={this.sendForm}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidoRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.radioButtonMenRef} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.radioButtonWomenRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.radioButtonOtherRef} /> Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>





                    </div>

                    <Sidebar blog="false" />
                </div>

            </div>
        );
    }
}

export default Formulario;