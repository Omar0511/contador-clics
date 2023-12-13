import { useState } from 'react';
import './App.css';
import Boton from './component/Boton';
import Contador from './component/Contador';

// Definimos como queremos que se llame la IMG que vamos a IMPORTAR
import logo from './img/logo.svg';

function App() {
  /*
    1. Es el valor que queremos usar como el estado
    2. Es una función que nos permite actualizarlo
    El 0 es el valor inicial de numClics
  */
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
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
        <Contador
          numClics={numClics}
        />

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
