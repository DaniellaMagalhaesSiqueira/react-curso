import React from 'react'
import If, { Else } from "./if"


export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If teste={ usuario && usuario.nome }>
                Seja bem-vindo(a) <strong>{usuario.nome}</strong>!
            </If>
            <If teste={ !usuario || !usuario.nome }>
                Seja bem-vindo(a) <strong>Amigo(a)</strong>!
            </If> */}
            <If teste={ usuario && usuario.nome }>
                Seja bem-vindo(a) <strong>{usuario.nome}</strong>!
                <Else>
                Seja bem-vindo(a) <strong>Amigo(a)</strong>!
                </Else>
            </If>

        </div>
    )
}