import './App.css';

// Definimos como queremos que se llame la IMG que vamos a IMPORTAR
import logo from './img/logo.svg';

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          className='logo'
          // Utilizamos el import de LOGO
          src={logo}
          alt='Logo'
        />
      </div>

      <div className='contenedor-principal'>

      </div>
    </div>
  );
}

export default App;
