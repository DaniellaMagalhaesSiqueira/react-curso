import React, { useState } from 'react'
import Numeros from './NumerosSorteados'
import './Mega.css'

export default props => {
    const [qtde, setQtde] = useState(6)
    const [valor, setValor] = useState(6)
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(60)
    const [numeros, setNumeros] = useState(<Numeros numeros={6} min={1} max={60}></Numeros>)

    function alterarQuantidade(e) {
        setNumeros(<Numeros numeros={qtde} min={min} max={max}></Numeros>)

    }

    function alterarValor(e) {
        setValor(+e.target.value)
        setQtde(+e.target.value)
    }

    function alterarValorMin(e) {
        setMin(+e.target.value)
    }

    function alterarValorMax(e) {
        setMax(+e.target.value)
    }

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>Surpresinha</h3>
            {numeros}
            <div>
                <label htmlFor="quantidade">Quantidade: </label>
                <input id="quantidade" type="number" value={valor} onChange={alterarValor} min="6" max="15"/>
            </div>
            <div>
                <label htmlFor="minimo">Valor Mínimo (1): </label>
                <input id="minimo" type="number" value={min} onChange={alterarValorMin} />
            </div>
            <div>
                <label htmlFor="maximo">Valor Máximo (60): </label>
                <input id="maximo" type="number" value={max} onChange={alterarValorMax} />
            </div>

            <button onClick={alterarQuantidade}>Gerar Números</button>
        </div>
    )
}