import React, {Component} from 'react'

// class Componente extends Component {
//     render() {
//         return <h2>{this.props.mgs}</h2>
//     }
// }

// Componente funcional - Funcion declarada
// function Componente(props) {
//     return <h2>{props.mgs}</h2>
// }

// Componente funcional expresado / Funcion expresada
const Componente = props => <h2>{props.mgs}</h2>

export default Componente
// el default sirve para para no usar desucctruracion para immportarlo

