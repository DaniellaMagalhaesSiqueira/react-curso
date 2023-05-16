import React from 'react'

export default (params) => {
    // const min = params.min
    // const max = params.max
    const {min, max} = params
    const aleatoria = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Numero máximo {max} </p>
            <p>Numero mínimo {min} </p>
            <p>Aleatório {aleatoria} </p>
        </div>
    )

}
