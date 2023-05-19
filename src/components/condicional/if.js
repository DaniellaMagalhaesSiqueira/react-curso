/*
    <if teste={aluno.nota >= 7}>
        <span>...<span>
        <span>...<span>
        <span>...<span>
    </if>
*/

export default props => {
    const elseChild = props.children.filter(child =>{
        return child.type && child.type.name === 'Else'
    })[0]

    const isChildren = props.children.filter(child =>{
        return child !== elseChild
    })


    console.log(elseChild)
    if(props.teste){
        return isChildren
    }else if(elseChild){
        return elseChild
    }else{
        return false
        
    }
}

export const Else = props => props.children