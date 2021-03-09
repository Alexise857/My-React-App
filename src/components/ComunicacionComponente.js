import React, {Component} from 'react';

export default class Padre extends Component {
    state = {
        contador: 0,
    };

    incrementarContador = (e) => { // Este metodo lo ejecutara el hijo
        this.setState({
            contador: this.state.contador + 1,
        })
    };

    render() {
        return (
            <>
                <h2>Comunicacion entre componentes</h2>
                Contador <b>{this.state.contador}</b>
                <Hijo incrementarContador={this.incrementarContador}
                      mensaje="Mensaje para un hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador}
                      mensaje="Mensaje para un hijo 2"/>
            </>
        )
    }
}

function Hijo(props) {
    // Hijo pueda afectar el estado del padre, pero REact es one way data biend, pero usaremos eventos perzonalizados
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
}
