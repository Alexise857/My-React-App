import React, {useState, useEffect} from 'react'

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState('Jhon')

    useEffect(() => {
        console.log('Moviendo el scroll') //cada vez que hago scroll, llama a esta funcion

        const detectarScroll = () => setScrollY(window.pageYOffset)

        window.addEventListener('scroll', detectarScroll)
        return () => {
            window.removeEventListener('scroll', detectarScroll)
        }

    }, [scrollY]);

    useEffect(() => { // si yo necesitara que un useEfect se llame en la fase de monate, usar 2do parametro
        // console.log('Fase de Montaje')
    }, [])
    // cuando le pasamos alguna variable de estado que queremos controlar, significa que el useEfect solo ejecutara si la variable passada cambia
    // si quieres que se ejecute una sola vez, como una peticion a la APIsi se deja vacio, React recominda dejar el arreglo vacio

    useEffect(() => {
        // console.log('Fase de Actualizacion')
    }) // si no tiene definido el segundo parameotr, sera un componeneDidUpdate

    useEffect(() => {
        return () => {
            // dessubrcribirse de servicios
            // console.log('Fase de desmontaje')
        }

    })
    return (
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}
