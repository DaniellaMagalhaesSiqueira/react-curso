import React, { useState } from 'react'
import './Input.css'

//O exemplo mostra um componente amarrado a um determinado estado, pois o valor é passado pelo useState.
//Se não houvesse a função quandoMudar o input ficaria sempre inalterado
export default (props) => {

    const [valor, setValor] = useState('Inicio')

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={'Sou imutável'} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}