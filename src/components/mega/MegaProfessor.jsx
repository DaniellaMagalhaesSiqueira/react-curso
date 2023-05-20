import React, {useState} from 'react'


export default props => {

    function gerarNumeroNaoContindo(max, min, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContindo(min, max, array) : aleatorio
    }
    
    function gerarNumeros2(qtde){
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContindo(1, 60, nums)
                console.log([...nums , novoNumero])
                return [...nums , novoNumero]
            }, []).sort((n1, n2) => n1 - n2)
        return numeros    
    }
    
    const [qtde, setQtde] = useState( props.qtde || 6)
    const numerosIniciais = gerarNumeros2(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)


    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="qtd">Quantidade: </label>
                <input type="number" id="qtd" value={qtde} onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros2(qtde))}>Gerar Números</button>
        </div>
    )
}