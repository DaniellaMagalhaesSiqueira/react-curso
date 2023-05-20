import React from 'react'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'


export default class Contador extends React.Component {


    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    };
    // constructor(props) {
    //     super(props)
    //     this.inc = this.inc.bind(this)
    //     }


    // inc () {
    //     this.setState({
    //         numero: this.state.numero + 1
    //     })
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                {/* <button onClick={ e => this.inc()}>+</button> */}
                {/* <p> {this.state.numero} </p> */}
                {/* <p>Valor Inicial: {this.props.numeroInicial}</p> */}
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
}