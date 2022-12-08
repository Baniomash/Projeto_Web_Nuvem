import { useState } from 'react';
import './App.css';
import api from './hooks/Api';


function App() {
  async function buscarTitulos(tipo){
    if(tipo === 0){
      const data = await api.get('');
      setListaTitulos(data.data);
      return data.data;
    } else if(tipo === 1){
      const data = await api.get('estaduais/');
      setListaTitulos(data.data);
      return data.data;
    } else if(tipo === 2){
      const data = await api.get('nacionais/');
      setListaTitulos(data.data);
      return data.data;
    } else if(tipo === 3){
      const data = await api.get('internacionais/');
      setListaTitulos(data.data);
      return data.data;
    } else {
      setListaTitulos([]);
      return [];
    }
  }

  const [listaTitulos, setListaTitulos] = useState([]);
  // const listaTitulos = [];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Títulos do São Paulo</h2>
      </header>
      <div className="quadroTabela">
        <div className="quadroBotoes">
          <button className="btn-busca" onClick={() => buscarTitulos(0)}>Todos os Títulos</button>
          <button className="btn-busca" onClick={() => buscarTitulos(1)}>Títulos Estaduais</button>
          <button className="btn-busca" onClick={() => buscarTitulos(2)}>Títulos Nacionais</button>
          <button className="btn-busca" onClick={() => buscarTitulos(3)}>Títulos Internacionais</button>
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
