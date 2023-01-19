import React, { Component } from "react";
import MiComponente from '../components/MiComponente';

class SeccionPruebas extends Component {

    contador = 0;
    /*
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }
    }*/

    state = {
        contador: 0
    }

    HolaMundo(nombre,edad){
        var presentacion = (
            <div>
                <h2>Hola, Soy {nombre}</h2>
                <h3>Y Tengo {edad} años.</h3>
            </div>
        )
        return presentacion;
    }

    sumar = (e) => {
        this.setState({
            contador:( this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador : (this.state.contador - 1)
        });
    }

    render(){

        var nombre = "Javier Aravena";
        var edad = 32;

        return (
            <section id="content">
            <h2 className="subheader">Últimos artículos</h2>
            <p>
                Hola Bienvenido al curso React de Javier Aravena! !
                
            </p>
            <h2 className="subheader">Funciones y JSX basico</h2>
            {this.HolaMundo(nombre,edad)}

            <h2 className="subheader">Componentes</h2>
            <section className='componentes'>
  
              <MiComponente />
              <MiComponente />
            </section>

            <h2 className="subheader">Estados en React</h2>
            <p>
                Contador: {this.state.contador}
            </p>
            <p>
                <input type="button" value="Sumar" onClick={this.sumar}/>
                <input type="button" value="Restar" onClick={this.restar}/>
            </p>

          </section>
        )
    }
}

export default SeccionPruebas;