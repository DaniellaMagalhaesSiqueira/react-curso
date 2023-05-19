import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'


//nome, idade, nerd => pai
export default props =>{
    //a função useState retorna um array com duas posições (o valor sem si e uma função usada para alterar o valor)
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    // let idade = 0
    // let nerd = false
    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    // function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
    //     nome = nomeParam
    //     idade = idadeParam
    //     nerd = nerdParam
    //     console.log(nomeParam, idadeParam, nerdParam)
    // }


    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>

            </div>
            <IndiretaFilho quandoClicar={ fornecerInformacoes }></IndiretaFilho>
        </div> )
}