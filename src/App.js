import './App.css';
import Boton from './component/Boton';
import Contador from './component/Contador';
import React from 'react';

// Definimos como queremos que se llame la IMG que vamos a IMPORTAR
import logo from './img/logo.svg';

class App extends React.Component
{
  constructor()
  {
    super();

    this.state = {
      numClics: 0
    };

    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

    manejarClic() 
    {
      this.setState( ( { numClics } ) => ( { numClics: numClics + 1 } ) );
    };

    reiniciarContador()
    {
      this.setState( { numClics: 0 } );
    };

  render() {
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
            numClics={this.state.numClics}
          />

          <Boton
            texto='Clic'
            btnClic={true}
            manejarClic={this.manejarClic}
          />

          <Boton
            texto='Reiniciar'
            btnClic={false}
            manejarClic={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
