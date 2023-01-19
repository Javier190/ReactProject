import React, {Component} from "react";

class Sidebar extends Component {

    render (){
        return (
            <aside id="sidebar">
                {this.props.blog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href="#" className="btn btn-success">Crear artículo</a>
                    </div>
                }
           
            <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
            </div>
        </aside>
        )
    }
}

export default Sidebar;