import React from 'react'
import PropTypes from 'prop-types'

// en una funcion, el componenete propiedades recibe las props como parmentro,las props son un objecto
export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Activo' : 'Incativo'}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{JSON.stringify(props.objeto)}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}
Propiedades.defaultProps = {
    porDefecto: "Las props"
}
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}
