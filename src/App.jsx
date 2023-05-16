import React from 'react'
import Prim from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import "./App.css"


// export default function (props){

//     return (
//         <div id="app">
//             <h1>Fundamentos React</h1>
//         <Fragmento/>
//         <ComParametro 
//             titulo="Situação do Aluno" 
//             aluno="Pedro" nota={9.3}>
//         </ComParametro>
//         <ComParametro 
//             titulo="Situação do Aluno" 
//             aluno="Maria" nota={9.9}>
//         </ComParametro>
//         <Prim></Prim>

//     </div>
//     )
// }
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#06 - Repetção" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00c8f8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Jana"/>
                    <FamiliaMembro nome="Juliana"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio max={60} min={1} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94c6f">
                <Fragmento />
            </Card>


            <Card titulo="#02 - Com Parâmetros" color="#e8b71a">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" nota={9.3}>
                </ComParametro>
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Maria" nota={9.9}>
                </ComParametro>
            </Card>


            <Card titulo="#01 - Priemeiro Componente" color="#588c73">
                <Prim></Prim>
            </Card>

        </div>




    </div>