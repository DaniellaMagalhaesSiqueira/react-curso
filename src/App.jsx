import React from 'react'
import Prim from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
import MegaProf from './components/mega/MegaProfessor'
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

            <Card titulo="#13 - Mega Professor" color="#b9006e">
                <MegaProf qtde={6}></MegaProf>
            </Card>

            <Card titulo="#13 - Desafio Megasena" color="#bf42f5">
                <Mega ></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado(Input)" color="#e45f56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8bad39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323c">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982365">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernanda'}}/>
                {/* <UsuarioInfo usuario={{ email: 'fer@nanda.com'}}/>
                <UsuarioInfo usuario={{ }}/> */}
                <UsuarioInfo/>
            </Card>

            <Card titulo="#07 - Repetção Desafio" color="#3a9ad9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

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