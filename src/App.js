import { useEffect, useState } from 'react';
import './App.css';
import Api from './hooks/Api';


function App() {
  // const [listaTitulos, setListaTitulos] = useState([]);
  // const listaTitulos = [{nome: 'Mundial', ano: 1992, tipo: "internacional"}, {nome: 'Mundial', ano: 1993, tipo: "internacional"}];
  const listaTitulos = [];
  const busca = (tipo) => {
    if (tipo === 'Todos') {
      setBtnState(0);
    } else if (tipo === 'Estaduais') {
      setBtnState(1);
    } else if (tipo === 'Nacionais') {
      setBtnState(2);
    } else if (tipo === 'Internacionais') {
      setBtnState(3);
    } else {
      setBtnState(4);
    }
  };
  const [btnState, setBtnState] = useState();
  
  useEffect(() => {
    // setListaTitulos(Api(btnState));
    alert(Api(btnState));
  }, [btnState]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Títulos do São Paulo</h2>
      </header>
      <div className="quadroTabela">
        <div className="quadroBotoes">
          <button className="btn-busca" onClick={()=>busca('Todos')}>Todos os Títulos</button>
          <button className="btn-busca" onClick={()=>busca('Estaduais')}>Títulos Estaduais</button>
          <button className="btn-busca" onClick={()=>busca('Nacionais')}>Títulos Nacionais</button>
          <button className="btn-busca" onClick={()=>busca('Internacionais')}>Títulos Internacionais</button>
        </div>
        <table className="tabela">
          <tr>
            <th>Título</th>
            <th>Ano</th>
          </tr>
          {listaTitulos !== []?listaTitulos.map((titulo)=>(
            <tr>
            <td>{titulo.nome}</td>
            <td>{titulo.ano}</td>
          </tr>
          )):<></>}
        </table>    
      </div>
    </div>
  );
}

export default App;
