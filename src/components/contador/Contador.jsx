import { useState } from 'react'

export default function Contador({min, max}) {
    const [cont, setCont] = useState(min);
    /*
    function incrementar(){ 
        if(cont < 7){
            setCont(cont+1);
        }                 
    }

    function decrementar(){
        if(cont > 3){
            setCont(cont-1);
        }          
    }
    */

    function alterarCont(op){
        switch(op) {
            case '+':
                if(cont< max) setCont(cont+1);
                break;
            case '-':
                if(cont > min) setCont(cont-1);
                break;
        }
    }
    
 
    return (
        <div className='contador'>
            <p><span>Intervalo (limite) do Contador:</span> [{min},{max}]</p>
            <p><span className='b'>Contador:</span>  {cont}</p>
            <button onClick={() => alterarCont('-')}>-</button>
            <button onClick={() => alterarCont('+')}>+</button>  
            <hr />        
        </div>
    )
}
  
Contador.defaultProps = {
    min: 1,
    max: 10
}

/*

 <button onClick={() => setCont(cont+1)}>-</button>
 <button onClick={incrementar}>+</button>  
 <button onClick={decrementar}>+</button>  
 
 */