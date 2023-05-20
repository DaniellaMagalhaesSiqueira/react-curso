import React from 'react'
import sorteio from './desafioMegaSena'


export default props => {
    const array = props.numeros
    const min = props.min || 1
    const max = props.max || 60
    const numeros = sorteio(array, min, max).map((num, i) =>{
        if(i === array - 1){
            let str = num
            return(
                <span key={i}>{str} </span>
                );
            }else{
            let str = num +","
            return(
                <span key={i}>{str} </span>
            );
        }
    })
    return (
        <div>
           {numeros}
        </div>
    )
}