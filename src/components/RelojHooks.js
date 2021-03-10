import React, {useState, useEffect} from 'react';

function Reloj({hora}) {
    return <h3>{hora}</h3>
}

export default function RelojHooks() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000)
        } else {
            clearInterval(temporizador);
        }

        return () => { // aqui esta el componetewillUnMount
            console.log('Fase de desmontaje')
            clearInterval(temporizador);
        }

    }, [visible])
    // use effect no tiene mucho sentido cuando no variables,
    // aqui se ve como la fancion de efecto, solo se ejecuta cuando hay un cambio en la variable visible
    // ese mejor tener varios useEfeect difrentes, uno por cada tarea, no hay ninugn limitante para usar useEfect

    return (
        <>
            <h2>Reloj con hooks</h2>
            {visible && <Reloj hora={hora}/>}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </>
    )

}
