import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Serviços', 'Produtos']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente />
                    <button className="btn waves-effect waves-light purple lighten-4" onClick={(e) => {this.setState({
                        tela: "cadastrarCliente"
                    })}}>
                        Cadastrar Cliente
                    </button>
                </>
            )
        } else if (this.state.tela === 'cadastrarCliente') {
            return (
                <div className="row">
                    {barraNavegacao}
                    <div className="row">
                        <div className="col s12">
                            <FormularioCadastroCliente tema="purple lighten-4" />
                        </div>
                    </div>   
                </div>
            )
        } else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos />
                    <button className="btn waves-effect waves-light purple lighten-4" onClick={(e) => {this.setState({
                        tela: "cadastrarServico"
                    })}}>
                        Cadastrar Serviço
                    </button>
                </>
            )
        } else if (this.state.tela === 'cadastrarServico') {
            return (
                <div className="row">
                    {barraNavegacao}
                    <div className="row">
                        <div className="col s12">
                            <FormularioCadastroServico tema="purple lighten-4" />
                        </div>
                    </div>   
                </div>
            )
        } else if (this.state.tela === 'Produtos'){
            return(
                <>
                    {barraNavegacao}
                    <ListaProdutos />
                    <button className="btn waves-effect waves-light purple lighten-4" onClick={(e) => {this.setState({
                        tela: "cadastrarProduto"
                    })}}>
                        Cadastrar Produto
                    </button>
                </>
            )
        } else if (this.state.tela === 'cadastrarProduto') {
            return (
                <div className="row">
                    {barraNavegacao}
                    <div className="row">
                        <div className="col s12">
                            <FormularioCadastroProduto tema="purple lighten-4" />
                        </div>
                    </div>   
                </div>
            )
        }
    }
}
