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


//Meus métodos
function gerador(min, max) {
    const num = parseInt(Math.random() * (max + 1 - min)) + min
    return num;
}

export default function gerarNumeros(qtde, min, max) {
    if (qtde < 1) {
        qtde = 1

    }
    if (qtde > max) {
        qtde = max
    }
    if (((max - min) < qtde)) {
        max = 60
        min = 1
        qtde = 6
    }

    if (max < min) {
        max = 60
        min = 1
        qtde = 6
    }

    const arrayNum = []
    let num = 0;
    for (var i = 0; i < qtde; i++) {
        num = gerador(min, max)
        if (arrayNum.includes(num)) {
            i--;
        } else {
            arrayNum[i] = num
        }
    }
    return arrayNum.sort((n1, n2) => n1 - n2)
}

console.log(gerarNumeros2(6))