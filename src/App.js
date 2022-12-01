import './App.css';

const busca = (tipo) => {
  if (tipo === 'Todos') {
    alert('opa!');
  } else if (tipo === 'Estaduais') {

  } else if (tipo === 'Nacionais') {

  } else if (tipo === 'Internacionais') {

  } else {

  }
};

const listaTitulos = [{nome: 'Mundial', ano: 1992, tipo: "internacional"}, {nome: 'Mundial', ano: 1993, tipo: "internacional"}]

function App() {
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
          {listaTitulos.map((titulo)=>(
            <tr>
            <td>{titulo.nome}</td>
            <td>{titulo.ano}</td>
          </tr>
          ))}
        </table>    
      </div>
    </div>
  );
}

export default App;
