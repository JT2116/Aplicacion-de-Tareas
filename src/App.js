import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='App-tareas'>
      <div className='titulo-cont'>
        <h1 className='titulo'>
          Tareas
        </h1>
      </div> 
      <div className='tareas-listaP'>
        <h1 className='titulo2'>Lista de tareas</h1>
        <ListaDeTareas /> 
      </div>
    </div>
  );
}

export default App;
