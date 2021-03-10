import React, {useState} from 'react';

export default function ContadorHooks(props) { // En los componenets de funcion, el return se comprende como el render, tambien pueden resibir propiedades
    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    // console.log(useState())
    console.log({contador})
    console.log(setContador)
    return (
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            Contador de <p>{props.titulo}</p>
            <h3>{contador}</h3>
        </>
    )
}

//propiedad por defecto, aunque yo no la espeficique se va a encontrar
ContadorHooks.defaultProps = {
    titulo: 'Clicks'
}
