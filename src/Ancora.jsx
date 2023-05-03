import {Link} from "react-router-dom";

export default function Ancora() {
    return (
        <ul>
            <li><Link to="/exercicio1" target="_blank">Exercício 1 (contador)</Link></li> 
            <li><Link to="/exercicio2" target="_blank">Exercício 2 (exibir nome)</Link></li> 
            <li><Link to="/exercicio3" target="_blank">Exercício 3 (caixa de texto)</Link></li> 
            <li><Link to="/exercicio4" target="_blank">Exercício 4 (concatenar nome)</Link></li>      
            <li><Link to="/exercicio5" target="_blank">Exercício 5 (adicionar parágrafo)</Link></li>            
        </ul>
    )
}

/*
BrowserRouter

<ul>
    <li><a href="/exercicio1">Exercício 1</a></li>   
    <li><a href="/exercicio2">Exercício 2</a></li>
    <li><a href="/exercicio3">Exercício 3</a></li>
    <li><a href="/exercicio4">Exercício 4</a></li>         
    <li><a href="/exercicio5">Exercício 5</a></li>
</ul>

*/