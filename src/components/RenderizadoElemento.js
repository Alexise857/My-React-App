import React, {Component} from 'react';
import data from '../helpers/data'


function ElementoLista(props) {
    return (
        <div>
            <li>
                <a href={props.el.web} target="_blank"> {props.el.name} FrontEnd</a>
            </li>

        </div>
    )

}

export default class RenderizadoElemento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ['primavera', 'verano', 'invierno', 'otoño']
        }
    }

    render() {
        return (
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))
                    }
                </ol>
                <h3>Frameworks FrontEnd JS</h3>
                <ul>
                    {
                        data.framework.map((frame, index) => (
                            <ElementoLista key={frame.id} el={frame}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
