import React from "react"


const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const Introdu = () => {

  const teste = "String teeste";
  const ativo = true;
  const random = Math.random();
  const dados = mario;

  //reduce é um função de callback 
  const total = dados.compras.map(item => Number(item.preco.replace('R$',''))).reduce((a,b) =>a+b);
  console.log(total);
  return (
      // <a className="ativo" href="https://origamid.com" title="Isso é um site">
      //   Origamid
      // </a>
      <React.Fragment>
        {/* <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        <p className={ativo ? 'ativo' : 'inativo'}>{random * 100}</p> */}
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      {/* no span a primeira chave é pra dizer que vai ser js */}
      <p>Situação: <span style={{color: dados.ativa ? 'green':'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total: R$ {total}</p>
      {/* as proximas if são a mesma coisa */}
      <p>{total > 10000 ? 'Você está gastandddo muito' : ''}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
      </React.Fragment>
  )
}

export default Introdu
