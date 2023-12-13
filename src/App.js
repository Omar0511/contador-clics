import './App.css';
import Boton from './component/Boton';

// Definimos como queremos que se llame la IMG que vamos a IMPORTAR
import logo from './img/logo.svg';

function App() {
  const manejarClic = () => {
    console.log('clic');
  };

  const reiniciarContador = () => {
    console.log('Reiniciar');
  };

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
        <Boton
          texto='Clic'
          btnClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          btnClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
