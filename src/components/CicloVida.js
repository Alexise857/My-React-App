import React, {Component} from 'react'

class Reloj extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() { // comonente de desmontaje, se ejecuta cuando el componente ya no exista
        console.log(3, 'El componente ha sido eliminado del DOM')
    }

    render() {
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component {

    constructor(props) {
        super(props);
        console.log(0, 'el componente se inicializa, aun no esta en el DOM')
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null;

    }

    componentDidMount() { // cuando constuctor se incializa, aun no esta e el arbol del componenet, REACT pide que las subsbriciones API sean aqui
        // Los elementos ya estan cargados en el DOM
        console.log(1, 'el componenete ya se encuentra en el DOM')
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // me perite pasa r las propiedades previas y el estado previo antes de actualizar el stado
        console.log(2, 'el estado o las props del componente han cambiado')
        console.log(prevProps)
        console.log(prevState)
    }


    ticTac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    iniciar = () => {
        this.ticTac();
        this.setState({
            visible: true,
        })
    }

    detener = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible: false,
        })
    }

    render() {
        console.log(4, 'el componente se dibuja( o se redibuja por algun cambio en el DOM)')
        return (
            <>
                <h2>Ciclo de vida de los componenets de Clase</h2>
                {/*<h3>{this.state.hora}</h3>*/}
                {/* Renderizado Condicional */}
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        )

    }
}
