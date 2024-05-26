import React from "react";


const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];


const Array = () =>{
    const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
    const produtosFiltrados = produtos
    .filter(({preco}) => Number(preco.replace('R$','')) > 1500)

    return (
        // <ul>
        //     {filmes.map((filme) =>(
        //     <li key={filme}>{filme}</li>
        //     ))}
        // </ul>

        // <ul>
        //     {livros.map(livro => <li key={livro.nome}>{livro.nome}</li>)}
        // </ul>
            // <ul>
            //     {livros
            //     .filter(({ano}) => ano >= 1998)
            //     .map(({nome,ano}) => <li key={nome}>{nome}, {ano}</li>)}
            // </ul>
            <>
            
            {produtosFiltrados
            .map(({preco,id,nome,cores}) =>
             <div key={id}>
                <h1>{nome}</h1>
                <p>Preço: R$ {Number(preco.replace('R$',''))}</p>
                
                <ul>
                    {cores.map(cor => <li style={{backgroundColor: cor, color:"white"}} key={cor}>{cor}</li>) }
                </ul>
                </div>

            )}
       
        </>
    );

};

export default Array;
