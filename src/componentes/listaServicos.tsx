/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

export default class ListaServicos extends Component {
    render() {
        return (
            <div className="collection">
                <a className="collection-item">Serviço 1</a>
                <a className="collection-item">Serviço 2</a>
                <a className="collection-item">Serviço 3</a>
                <a className="collection-item">Serviço 4</a>
            </div>
        )
    }
}