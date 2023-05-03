import { useState } from "react"

export default function ExibirNome(){
    const [nome,setNome] = useState("")

    function atualizarNome(evento){
        setNome(evento.target.value.toUpperCase())
    }

    return(
        <div>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={atualizarNome}/>
            </form>
            <p>{nome}</p>
        </div>
    )
}

/*

<input type="text" onChange={evento => setNome(evento.target.value.toUpperCase())}/>

*/