import { useEffect, useState } from 'react';
import './App.css';
import api from './hooks/Api';


function App() {
  async function buscarTitulos(btnState){
    if(btnState === 0){
      const data = await api.get('');
      console.log(data.data);
      return data.data;
    } else {
      return [];
    }
  }

  const [listaTitulos, setListaTitulos] = useState([]);
  // const listaTitulos = [];

  const [btnState, setBtnState] = useState();
  
  useEffect(() => {
    setListaTitulos(buscarTitulos(btnState));
  }, [btnState]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Títulos do São Paulo</h2>
      </header>
      <div className="quadroTabela">
        <div className="quadroBotoes">
          <button className="btn-busca" onClick={() => setBtnState(0)}>Todos os Títulos</button>
          <button className="btn-busca" onClick={() => setBtnState(1)}>Títulos Estaduais</button>
          <button className="btn-busca" onClick={() => setBtnState(2)}>Títulos Nacionais</button>
          <button className="btn-busca" onClick={() => setBtnState(3)}>Títulos Internacionais</button>
        </div>
        <table className="tabela">
          <thead>
          <tr>
            <th>Título</th>
            <th>Ano</th>
          </tr>
          </thead>
          <tbody>
          {listaTitulos.length > 0?listaTitulos.map(titulo=>(
            <tr>
              <td>{titulo.nome}</td>
              <td>{titulo.ano}</td>
            </tr>
          )):
          <tr>
            <td>Selecione uma das opções acima</td>
          </tr>
          }
          </tbody>
        </table>    
      </div>
    </div>
  );
}

export default App;
