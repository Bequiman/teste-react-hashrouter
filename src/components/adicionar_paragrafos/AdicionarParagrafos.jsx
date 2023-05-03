import React, { useState } from 'react';
import { Fragment } from 'react';

export default function AdicionarParagrafos() {

    const [paragrafos, setParagrafos] = useState([]);


    function adicionar(evento) {
        evento.preventDefault();
        const novoParagrafo = evento.target.paragrafo.value;
        setParagrafos([...paragrafos, novoParagrafo]);
        evento.target.reset();
    }



    return (
        <div className='adicionarParagrafo'>
            <p>Parágrafo 1 (interface)</p>
            <p>Parágrafo 2 (interface)</p>
            {paragrafos.map((paragrafo, index) => (
                <p key={index}>{paragrafo} (usuário)</p>
            ))}
            <form action="" onSubmit={adicionar}>
                <input type="text" name="paragrafo" id="paragrafo" />
                <button type="submit">Adicionar parágrafo</button>
            </form>

        </div>
    )

}

/*

const [estatico, setEstatico] = useState([
        <p key="1">Parágrafo 1</p>,
        <p key="2">Parágrafo 2</p>
    ]);


 {estatico.map((elemento, index) => (
        <p key={index}>{elemento}(interface)</p>
 ))}

*/