import React from 'react';
import '../css/styles.css'

class Boton extends React.Component
{
    render() {
        return (
            <button 
                className={ this.props.btnClic ? 'boton-clic' : 'boton-reiniciar' }
                onClick={this.props.manejarClic}
            >
                {this.props.texto}
            </button>
        );
    }
}

export default Boton;