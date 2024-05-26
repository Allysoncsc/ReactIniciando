import React from "react"

const App = () => {

  const teste = "String teeste";
  const ativo = true;
  const random = Math.random();
  return (
      // <a className="ativo" href="https://origamid.com" title="Isso é um site">
      //   Origamid
      // </a>
      <React.Fragment>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        <p className={ativo ? 'ativo' : 'inativo'}>{random * 100}</p>
      </React.Fragment>
  )
}

export default App
