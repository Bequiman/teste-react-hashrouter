import Contador from "./Contador"

export default function InterfaceContador(){
    return(
        <>
           <Contador min={5} max={10}/>
           <Contador/>
           <Contador  min={1} max={5}/>
        </>
    )
}