import React, {Component} from "react";

class MiComponente extends Component{

    render(){

            let receta = {
                nombre: 'Pizza',
                ingredientes: ['tomate', 'queso', 'oregano', 'jamon cocido'],
                sabor: 'margherita',
                calorias: 400
            }

        return (
            <div className="mi-componentess">
                <h1>Componentes de una Pizza</h1>
                <h1>{receta.nombre}</h1>
                <h1>{receta.sabor}</h1>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                          console.log(ingrediente);      
                          return (
                            <li key={i}>
                                {ingrediente}
                            </li>
                          )
                        })
                    }
                </ol>
                <br></br>
            </div>
        );
    }
}

export default MiComponente;