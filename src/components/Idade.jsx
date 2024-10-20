function Idade(props){

    let idade = props.numero 
    if (idade >=18){
        return <h1>Você já pode tomar uns goró rs</h1>
    }
    else {
        
       return <h1>Você só pode tomar suco tang</h1>
    }
}




export default Idade