import React, { useState } from 'react';

export default function ConcatenarNome() {
  const [nome, setNome] = useState('');

  function concatenarNome(event) {
    event.preventDefault();
    const nomeCompleto = event.target.elements.nome.value + ' ' + event.target.elements.sobrenome.value;
    setNome(nomeCompleto);
    
  }

  return (
    <div className='nomeCompleto'>
      <form onSubmit={concatenarNome}>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome"  />
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" name="sobrenome" id="sobrenome" />
        <button type="submit">Exibir nome completo</button>
      </form>
      <p>{nome}</p>
    </div>
  );
}


/*

event.target.elements.nome.value 

No entanto, é importante lembrar que, se o seu formulário tiver mais de um elemento com o mesmo nome, 
event.target.nome.value retornará apenas o valor do primeiro elemento com esse nome. Nesse caso, 
é recomendável usar event.target.elements.nome.value para garantir que você está acessando o elemento correto.

Por isso, a abordagem mais segura é usar event.target.elements.nome.value para acessar os valores dos campos do formulário, 
já que isso garante que você está acessando o elemento certo, mesmo que haja mais de um elemento com o mesmo nome.


event.preventDefault() 


event.preventDefault() é um método do objeto evento (event) que é usado para impedir o comportamento padrão de um evento 
em um elemento HTML.

Por exemplo, no caso do nosso formulário, se não usássemos event.preventDefault(), quando o botão "Exibir nome completo" fosse clicado,
 o comportamento padrão do formulário seria submeter seus dados para o servidor e recarregar a página inteira. 
 Mas, como queremos tratar os dados do formulário e exibir o nome completo do usuário sem recarregar a página, 
 precisamos impedir esse comportamento padrão do evento.

Ao usar event.preventDefault(), estamos dizendo ao navegador para não executar o comportamento padrão do evento 
(ou seja, não submeter o formulário e recarregar a página), permitindo que possamos manipular manualmente os dados 
do formulário e exibir o resultado desejado (no caso, o nome completo do usuário) sem interromper a interação do usuário com a página.

*/