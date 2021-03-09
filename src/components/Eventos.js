import React, {Component} from 'react';

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar($event) {
        console.log('Sumando')
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar($event) {
        console.log('restando')
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }

}

// Properties initializer
export class EventosES7 extends Component {

    state = {
        contador: 0
    }

    // Arrow function - remember, heredan el this del contexto del cual se encuentran
    sumar = ($event) => {
        console.log('Sumando')
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = ($event) => {
        console.log('restando')
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }

}

// function Boton(props) {
//     return (
//         <button onClick={props.myOnClick} >  Hecho componete botoon  </button>
//     )
// }

// const Boton = (props)  => (
//             <button onClick={props.myOnClick} >  Hecho componete botoon  </button>
// )

const Boton = ({myOnClick}) => (
    <button onClick={myOnClick}> Hecho componete botoon </button>
)


export class MasSobreEventos extends Component {

    handleClick = (e, mensaje) => {
        // SyntheticBaseEvent --> React envuelve el evento nativo del navegador, le da soporte a diferrentes browsers
        // Asi tener un mejor control de los eventos
        console.log({e})
        console.log(e.nativeEvent);
        console.log(e.target);
        // Acceder al evento nativo
        console.log(e.nativeEvent.target)
        console.log({mensaje});
    }

    render() {
        return (
            <div>
                <h2>Más sobre eventos </h2>
                <button
                    onClick={(e) =>
                        this.handleClick(e, 'HOLA PASANDO PARAMETRO')
                    }>
                    Saludar
                </button>
                {/*Evento Personalisado --- crear una prop y paasarle al compenete y asigncle al avento en el que trtabajemos en la etiqueta*/}


                {/*<Boton*/}
                {/*    onClick={ (e) =>*/}
                {/*        this.handleClick(e, 'HOLA PASANDO PARAMETRO')*/}
                {/*    } />*/}

                <Boton
                    myOnClick={(e) =>
                        this.handleClick(e, 'HOLA PASANDO PARAMETRO')
                    }/>
            </div>
        )
    }
}
