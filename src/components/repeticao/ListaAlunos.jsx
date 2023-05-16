import React from "react"
import alunos from "../../data/alunos"

export default function ListaAlunos(props) {

    // const li1 = <li> { alunos[0].id }) { alunos[0].nome } -&gt; { alunos[0].nota } </li>
    const lis = alunos.map((aluno) => {
        return (
            <li> 
                { aluno.id }) { aluno.nome } -&gt; { aluno.nota }
            </li>
        );
    });
    return (
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}