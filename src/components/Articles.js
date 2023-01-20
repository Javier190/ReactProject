import React, { Component, COmponent } from "react";
import axios from 'axios';
import Global from "../Global";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment/locale/es';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    };

    componentDidMount() {
        var home = this.props.home;
        var search = this.props.search;

        if (home == 'true') {
            this.getLastArticles();
        } else if (search && search != null && search != undefined) {
            this.getArticlesBySearch(search);
        } else {
            this.getArticles();
        }
    }

    getLastArticles = () => {
        console.log("Method getArticles Executed");
        axios.get(this.url + "articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            })
    }

    getArticlesBySearch = (searched) => {
        console.log("Method getArticles Executed");
        axios.get(this.url + "search/"+searched)
            .then(res => {

                    this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }).catch(err => {
                this.setState({
                    articles : [],
                    status : 'success'
                })
            })
    }

    getArticles = () => {
        console.log("Method getArticles Executed");
        axios.get(this.url + "articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            })
    }

    render() {

        var listArticles = this.state.articles.map((article) => {

            return (
                <article className="article-item" id="article-template">
                    <div className="image-wrap">

                        {
                            article.image !== null ? (
                                <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                            ) : (
                                <img src="https://i.ebayimg.com/images/g/6D0AAOSwm8tehLV2/s-l500.jpg" alt={article.title} />
                            )
                        }


                    </div>

                    <h2>{article.title}</h2>
                    <span className="date">
                        {article.content}
                        <br></br>
                        <Moment fromNow locale="es">
                            {article.date}
                        </Moment>

                    </span>
                    <Link to={'blog/articulo/'+article._id}>Leer más</Link>

                    <div className="clearfix"></div>
                </article>
            );
        });

        if (this.state.articles.length >= 1) {
            return (
                <div id="articles">
                    <p>{listArticles}</p>
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay Articulos para Mostrar !!</h2>
                    <p>Todavia no Hay contenido en esta seccion</p>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere un segundo</p>
                </div>
            );
        }


    }
}


export default Articles