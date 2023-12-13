import React from 'react';
import '../css/styles.css'

function Boton( { texto, btnClic, manejarClic } )
{
    return (
        <button 
            className={ btnClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}
        >
            {texto}
        </button>
    );
}

export default Boton;