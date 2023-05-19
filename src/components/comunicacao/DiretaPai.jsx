import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return (
        <div>
            <DiretaFilho nome="Pedro" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Ana" idade={17} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Gustavo" idade={30} nerd={true}></DiretaFilho>
        </div> )
}