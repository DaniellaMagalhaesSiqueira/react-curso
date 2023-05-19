import React from "react"
import alunos from "../../data/alunos"

export default function ListaAlunos(props) {

    // const li1 = <li> { alunos[0].id }) { alunos[0].nome } -&gt; { alunos[0].nota } </li>
    const alunosSimuladoBanco = alunos.map((aluno) => {
        return (
            //atributo key refere-se a uma chave única que o react precisa reconhecer. Se fosse dado o nome e repetisse o nome, daria um problema para reconhecer
            <li key={aluno.id}> 
                { aluno.id }) { aluno.nome } -&gt; { aluno.nota }
            </li>
        );
    });
    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {alunosSimuladoBanco}
            </ul>
        </div>
    )
}