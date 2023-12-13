import React from 'react';

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