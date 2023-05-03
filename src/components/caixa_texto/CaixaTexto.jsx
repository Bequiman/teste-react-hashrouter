import { useState } from 'react'

export default function CaixaTexto({maximo}){
    //var maximo = props.maximo;


    const [cont,setCont] = useState(maximo);

    //2º

    function areaTexto(evento){    
        let length = evento.target.value.length;
        if(length <= maximo){
            setCont(maximo - length)
        }     
    } 
    
    /*
    
    //1º

    function areaTexto(evento){    
        if(evento.length <= maximo){
            setCont(maximo - evento.length)
        }     
    } 
    
    */
    
  

    return(
        <div>
            <p>Mensagem</p>
            <form action="">                        
                <textarea name="" id="" cols="30" rows="10" maxLength={maximo} onChange={areaTexto}></textarea>
            </form>
            <p>Restando {cont} caracteres</p>
        </div>
    )
}


CaixaTexto.defaultProps = {
    maximo: 300
}

/*

1º <textarea name="" id="" cols="30" rows="10" maxLength={maximo} onChange={evento => c(evento.target.value)}></textarea>
2º <textarea name="" id="" cols="30" rows="10" maxLength={maximo} onChange={c}></textarea>

*/