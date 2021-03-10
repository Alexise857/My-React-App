import React from 'react'
import logo from './logo.svg';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import './App.css';
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RederizadoCondicional";
import RenderizadoElemento from "./components/RenderizadoElemento";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import ComunicacionComponente from "./components/ComunicacionComponente";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import CicloVida from "./components/CicloVida";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";

function App() {
    let nombre = 'Alexis';
    let auth = true;
    let estaciones = ['primavera', 'verano', 'invierno', 'otoño']
    return (
        <div className="App">
            <header className="App-header">
                <section>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Editar basics <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </section>
                <section>
                    <Componente mgs="Hola Soy Otr mensaje un nuevo compoente deszde un arrow"/>
                    <hr/>
                    <Propiedades cadena="Esto es una cadena de texto -String "
                                 numero={19}
                                 arreglo={[1, 2, 3, 4]}
                                 objeto={{nombre: 'Jhon', correo: 'jonmircha@gmail.com'}}
                                 funcion={(num) => num * num}
                                 elementoReact={<i>Esto es un elemento REact</i>}
                                 componenteReact={<Componente mgs="soy un comopnete pasado como prop "/>}
                                 booleano={false}/>
                    <hr/>
                    <Estado/>
                    <hr/>
                    <RenderizadoCondicional/>
                    <hr/>
                    <RenderizadoElemento/>
                    <hr/>
                    <EventosES6/>
                    <hr/>
                    <EventosES7/>
                    <hr/>
                    <MasSobreEventos/>
                    <hr/>
                    <ComunicacionComponente/>
                    <hr/>
                    <AjaxApis/>
                    <hr/>
                    <ContadorHooks titulo={'Seguidores'}/>
                    <hr/>
                    <ScrollHooks/>
                    <hr/>
                    <CicloVida/>
                    <hr/>
                    <RelojHooks/>
                    <hr/>
                    <AjaxHooks/>
                    <hr/>
                    <HooksPersonalizados/>
                </section>
            </header>

        </div>
    );
}

export default App;
