import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          {/* PREENCHER CEP E VALIDAR */}
          <label>BUSCA DE CEP - VIACEP</label>

          <table className="conteudo">
            <tr>
              <td>
                <form className="lista-retorno" method="get"action=".">
                  <label>CEP: 
                    <input name="cep" type="text" id="cep" value="" size="15" maxlength="9"
                      onblur="pesquisacep(this.value);" />
                      <td><button>OK</button></td>
                  </label><br />
                  <label>RUA: 
                      <input name="rua" type="text" id="rua" size="40" />
                  </label><br />
                  <label>BAIRRO: 
                      <input name="bairro" type="text" id="bairro" size="40" />
                  </label><br />
                  <label>CIDADE: 
                      <input name="cidade" type="text" id="cidade" size="40" />
                  </label><br />
                  <label>ESTADO: 
                      <input name="uf" type="text" id="uf" size="2" />
                  </label><br />
                  <label>IBGE: 
                      <input name="ibge" type="text" id="ibge" size="8" />
                  </label>
                </form>
              </td>
              <td className="conteudo-direita">
                <h1>
                  CONTEUDO ADICIONAL
                </h1>
              </td>
            </tr>
          </table>
          <div className="conteudo-baixo">
              <h1>
                CONTEUDO ABAIXO.
              </h1>
          </div>
      </div>
    </div>
  );
}

export default App;
